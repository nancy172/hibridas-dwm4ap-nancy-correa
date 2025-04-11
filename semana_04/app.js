import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
//const userdb = process.env.USER_DB;
const app = express();
import routerApi from "./routes/index.js";

// Middleware
app.use(express.json());
app.use(express.static('public'));

app.get('/', (request, response) =>{
    console.log('Ruta Raíz');
    response.send('Home');
})

// Se llaman a las rutas
routerApi(app);


app.listen( port, () => {
    console.log(   chalk.green(`Servidor Web en el puerto ${port}`)  );    
})



