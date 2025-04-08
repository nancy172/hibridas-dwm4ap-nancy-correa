import chalk from "chalk";
import express from "express";
import ProductManager from "./ProductManager.js";

const port = 5000;
const app = express();

app.use(express.json());
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
        const id = request.params.id; 
        const product = await admin.getProductById(id);

        if(product === "Not found"){
            return response.status(404).json( { error: "El producto no existe."} );
        }

        response.json(product); 

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
            return response.json({ error: "Faltan datos del producto." });
        }

        response.json( {id} );

    } catch (error) {
        response.status(500).json( {error: "Hubo un error al agregar el producto."} );
    }
});

// Ruta para eliminar un producto por id:
app.delete ('/api/products/:id', async (request, response) => {
    const id = request.params.id;
    try {
        const deleted = await admin.deleteProductById(id);
        if(deleted){
            response.json( {msg: "El producto fue eliminado correctamente."} );
        } else {
            response.status(404).json( {error: "El producto no fue encontrado"} );
        }
    } catch (error) {
        response.status(500).json( {error: "Hubo un error al eliminar el producto."} );
    }
});

// Ruta para editar un producto:
app.put('/api/products/:id', async (request, response) => {
    
    try {
        const id = request.params.id;
        const { title, description, price, stock } = request.body;

        // Primero se valida que los campos estén completos
        if(!title || !description || !price || !stock){
            return response.json( {error: "Todos los campos son obligatorios."} );
        }

        const status = await admin.updateProductById(id, { title, description, price, stock });

        if(!status){
            return response.status(404).json( {error: "El producto no fue encontrado."} );
        }

        response.status(200).json( {msg: "El producto fue actualizado correctamente."} );

    } catch (error) {
        response.status(500).json( {error: "Hubo un error al actualizar el producto."} );
    }

});


// Se inicia el servidor
app.listen(port, () => {
    console.log( chalk.green(`Servidor web corriendo en el puerto ${port}`));
})
