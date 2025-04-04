import chalk from "chalk";
import express from "express";
//import ProductManager from "./ProductManager.js";
import UserManager from "./UserManager.js";

const port = 5000;
const app = express();

app.use(express.json());
//const admin = new ProductManager();
const userModel = new UserManager();


/*app.get('/', (request, response) => {
    console.log('Ruta raíz');
    response.send('Home');
})

app.get('/products', (request, response) => {
    const list = [ {id: 1, name: "Mouse", price: 2300} ];
    response.json(list);
})


app.post('/products' , (request, response) => {
    console.log('POST');
    response.json({id: 2})
})
*/

// -------------- RUTAS PARA LOS USUARIOS --------- Hay que validar!

// Se obtienen los usuarios
app.get('/api/users', async (request, response) => {
    const users = await userModel.getUsers();
    console.log(users);
    response.json(users);
});

// Se obtiene usuario por id
app.get('/api/users/:id', async (request, response) => {
    const id = request.params.id;
    const user = await userModel.getUserById(id);
    if(user){
        response.json(user);
    }else{
        response.status(404).json({msg: "No se encontró el usuario."})
    }
});

// Se agrega nuevo usuario
app.post('/api/users', async (request, response) => {
    const user = request.body;
    console.log(user);

    const id = await userModel.addUser(user);

    response.json( {id} );
});

// Se elimina un usuario por id
app.delete('/api/users/:id', async (request, response) => {
    const id = request.params.id;
    const status = await userModel.deleteUserById(id);
    if(status){
        response.json( {msg: "Usuario eliminado"});
    }else{
        response.status(404).json({msg: "No se encontró el usuario."})
    }
});

// Se edita un usuario
app.put('/api/users/:id', async (request, response) => {
    const id = request.params.id;
    
     
});




app.listen(port, () => {
    console.log( chalk.green(`Servidor web en el puerto ${port}`));
})


console.log( chalk.green('Puerto' + port));

/** Nodemon para servidor
 * npm install nodemon ---> npm start
 * Se usa Postman
 */