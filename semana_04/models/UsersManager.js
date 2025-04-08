import fs from 'fs/promises';
const path = "./users.json";

class UserManager{
    users = [];
    constructor(users=[]){
        this.users = users;
    }

    randomID(){
        return crypto.randomUUID();
    }

    // Se obtienen los productos
    async getUsers(){
        try {
            const data = await fs.readFile(path);
            this.users = JSON.parse( data);
            return this.users;
        } catch (error) {
            console.error(error);
        }
    }
    
    
    // Se agrega un producto
    async addProduct(user){
        await this.getUsers();
        user.id = this.randomID();
        this.users.push( user);
        
        const data = JSON.stringify( this.users, null, 2);
        try {
            await fs.writeFile( path, data );
            return user.id;
        } catch (error) {
            console.error(error);
        }
    }
    
    // Se obtiene user por id
    async getUserById(id){
        const users = await this.getUsers();
        const user = users.find(  item => item.id == id  );
        return user ? user : undefined;
    }

    // Se elimina user por id
    async deleteUserById(id){
        await this.getUsers();
        const pos = this.users.findIndex(u => u.id == id);
        this.users.splice(pos, 1);

        const data = JSON.stringify(this.users, null, 2);
        try {
            await fs.writeFile( path, data );
            return true ? pos != -1 : false;
        } catch (error) {
            console.error(error);
        }
    }

    // Se edita user
    async updateUserById(id, user){
        await this.getUsers();
        const pos = this.users.findIndex(u => u.id == id);
        this.users[pos].name = user.name;
        this.users[pos].email = user.email;
        const data = JSON.stringify(this.users, null, 2);
        try {
            await fs.writeFile( path, data );
            return user.id;
        } catch (error) {
            console.error(error);
        }
    }
}

export default UserManager;