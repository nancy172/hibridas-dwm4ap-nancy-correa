class ProductManager{
    products = [];
    constructor(products=[]){
        this.products = products;
    }
    
    addProduct(product){
        // Validar que no haya producto con mismo ID
        if(this.products.some(p => p.id === product.id)){
            console.log("El ID ya existe.");
            return;
        }

        // Validar campos obligatorios
        if(!product.id || !product.title || !product.description || !product.price || !product.stock){
            console.log("Todos los campos son obligatorios.");
            return;
        }

        this.products.push( product);
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const product = this.products.find(  item => item.id == id  );
        return product ? product : "Not found";
    }
}

module.exports = ProductManager;


