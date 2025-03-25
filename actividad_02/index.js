// Se exporta la clase con CommonJS 
const ProductManager = require('./ProductManager.js');

// Se crea la instancia de la clase
const p = new ProductManager();

// Se agregan productos
p.addProduct(
    {
        "id":1,  
        "title": "Teclado",  
        "description": "Teclado Mecánico",  
        "price": 25000,  
        "stock": 25
    }
);
p.addProduct(
    {
        "id":2,  
        "title": "Mouse",  
        "description": "Mouse Gamer",  
        "price": 5600,  
        //"stock": 12 "Todos los campos son obligatorios"
    }
);
p.addProduct(
    {
        "id":1, // "El ID ya existe" 
        "title": "Teclado",  
        "description": "Teclado Mecánico",  
        "price": 25000,  
        "stock": 25
    }
);

// Se muestran
console.log(p.getProducts());

// Se busca por ID
console.log(p.getProductById(1));
console.log(p.getProductById(23)); // "Not found"

