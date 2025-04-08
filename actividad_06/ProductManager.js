import fs from 'fs/promises';
const path = "./products.json";

class ProductManager{
    products = [];
    constructor(products=[]){
        this.products = products;
    }

    randomID(){
        return crypto.randomUUID();
    }

    // Se obtienen los productos
    async getProducts(){
        try {
            const data = await fs.readFile(path);
            this.products = JSON.parse(data);
            return this.products;
        } catch (error) {
            console.error("Hubo un error al leer los productos:", error);
        }
    }
    
    // Se agrega un producto
    async addProduct(product){
        
        if(!product.title || !product.description || !product.price || !product.stock){
            return "Todos los campos son obligatorios";
        }
        
        await this.getProducts();
        product.id = this.randomID();

        if(this.products.some(p => p.id === product.id)){
            console.log("El ID ya existe.");
            return;
        }

        this.products.push(product);

        const data = JSON.stringify(this.products, null, 2);
        try {
            await fs.writeFile(path, data);
            return product.id;
        } catch (error) {
            console.error("❌Error al guardar el producto:", error);
        }

    }

    // Se obtiene producto por id
    async getProductById(id){
        const products = await this.getProducts();
        const product = products.find(  item => item.id == id  );
        return product ? product : "Not found";
    }

    // Se elimina producto por id
    async deleteProductById(id){
        await this.getProducts();
        // Se crea una nueva lista excluyendo el producto con el id que se quiere eliminar
        const filteredProducts = this.products.filter(p => p.id != id);

        // Si la cantidad es igual significa que no se encontró el producto con ese id
        if (filteredProducts.length === this.products.length) {
            return false; 
        }

        this.products = filteredProducts;

        const data = JSON.stringify(this.products, null, 2);
        try {
            await fs.writeFile(path, data);
            return true;
        } catch (error) {
            console.error("❌Error al guardar el producto después de borrar:", error);
            return false;
        }
    }

    // Se edita el producto
    async updateProductById(id, product){
        await this.getProducts();
        const pos = this.products.findIndex(p => p.id == id);

        if(pos === -1){
            console.error("El producto no fue encontrado");
            return false;
        }

        // Se actualiza
        this.products[pos].title = product.title;
        this.products[pos].description = product.description;
        this.products[pos].price = product.price;
        this.products[pos].stock = product.stock;

        const data = JSON.stringify(this.products, null, 2);
        try {
            await fs.writeFile( path, data );
            return true;;
        } catch (error) {
            console.error("❌Error al editar el producto:", error);
            return false;
        }        

    }
}

export default ProductManager;


