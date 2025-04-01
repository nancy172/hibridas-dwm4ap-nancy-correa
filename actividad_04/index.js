// Se exporta la clase con CommonJS 
const { ProductManager } = require('./ProductManager.js');

// Se crea la instancia de la clase
const admin = new ProductManager();

// Se muestran los productos
async function mostrarProductos() {
    try {
        const products = await admin.getProducts();
        console.log("Lista de productos:", products)
    } catch (error) {
        console.error("❌Error:", error);
    }
}

// Se agrega producto
async function agregarProducto() {
    try {
        const newProduct = {
            title: "Mouse",
            description: "Mouse inalámbrico",
            price: 4000,
            stock: 10
        };

        const id = await admin.addProduct(newProduct);
        console.log(`✅ Producto agregado con ID: ${id}`);

        mostrarProductos();
    } catch (error) {
        console.error("❌Error al agregar producto:", error);
    }
}

// Producto por ID
/*async function buscarPorID(id) {
    try {
        const product = await admin.getProductById(id);
        console.log(`Producto encontrado:`, product);
    } catch (error) {
        console.error("❌Error. No se pudo encontrar el producto:", error);
    }
}*/

// Se prueba
async function ejecutar() {
    console.log("Probando métodos...");
    await agregarProducto();

    // if(id) {
    //     await buscarPorID(id);
    // }
}

ejecutar();




