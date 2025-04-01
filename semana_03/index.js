import chalk from "chalk";
import express from "express";
import ProductManager from "./ProductManager";
const port = 5000;
const app = express();

const admin = new ProductManager();


/*app.get('/', (request, response) => {
    console.log('Ruta raíz');
    response.send('Home');
})

app.get('/products', (request, response) => {
    const list = ({id: 1, name: "Mouse", price: 2300});
    response.json(list);
})


app.post('/products' , (request, response) => {
    console.log('POST');
    response.json({id: 2})
})
*/

app.get('/api/products', (request, response) => {
    const list = ({id: 1, name: "Mouse", price: 2300});
    response.json(list);
})

app.listen(port, () => {
    console.log( chalk.green(`Servidor web en el puerto ${port}`));
})


console.log( chalk.green('Puerto' + port));