import express from "express";
import chalk from "chalk";

const port = 5000;
const app = express();
import routerApi from "./routes/index.js";

// Middleware
app.use(express.json());

app.get('/', (request, response) =>{
    console.log('Ruta Raíz');
    response.send('Home');
})

// Se llaman a las rutas
routerApi(app);


app.listen( port, () => {
    console.log(   chalk.green(`Servidor Web en el puerto ${port}`)  );    
})



