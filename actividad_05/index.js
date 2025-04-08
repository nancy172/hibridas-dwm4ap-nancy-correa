import chalk from "chalk";
import express from "express";
import ProductManager from "./ProductManager.js";

const port = 5000;
const app = express();

// Para que express pueda leer los datos que se le manda en formato JSON a través de request.body:
app.use(express.json());

// Se crea una instancia de ProductManager
const admin = new ProductManager();

// Ruta para obtener todos los productos:
app.get('/api/products', async (request, response) => {
    try {
        const products = await admin.getProducts();
        response.json(products);
    } catch (error) {
        response.status(404).json( {error: "Hubo un error al obtener los productos."} );
    }
});

// Ruta para obtener producto por ID:
app.get('/api/products/:id', async (request, response) => {
    try {
        const id = request.params.id; // Se extrae el valor del id de la url
        const product = await admin.getProductById(id);

        if(product === "Not found"){
            return response.status(404).json( { error: "El producto no existe."} );
        }

        response.json(product); // Se envía el producto como respuesta si existe

    } catch (error) {
        response.status(500).json( {error: "Hubo un error al obtener el producto."} );
    }
});

// Ruta para agregar nuevo producto:
app.post('/api/products', async (request, response) => {
    try {
        const product = request.body;
        console.log(product);

        const id = await admin.addProduct(product);

        if (id === "Todos los campos son obligatorios") {
            return response.status(400).json({ error: "Faltan datos del producto." });
        }

        response.json( {id} );

    } catch (error) {
        response.status(500).json( {error: "Hubo un error al agregar el producto."} );
    }
});

// Se inicia el servidor
app.listen(port, () => {
    console.log( chalk.green(`Servidor web corriendo en el puerto ${port}`));
})
