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
        // Se valida primero los campos obligatorios
        if(!product.title || !product.description || !product.price || !product.stock){
            return "Todos los campos son obligatorios";
        }

        // Se obtiene la lista de productos actualizada
        await this.getProducts();

        // Se genera ID
        product.id = this.randomID();

        // Se valida que no haya producto con mismo ID
        if(this.products.some(p => p.id === product.id)){
            console.log("El ID ya existe.");
            return;
        }

        // Se agrega el producto
        this.products.push(product);

        // Se guarda en el json
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
}

export default ProductManager;


