import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import mongoose from "mongoose"; // Se importa mongoose

dotenv.config();

const dburi = process.env.MONGODB_URI; // Variable de entorno de mongodb

const port = process.env.PORT;
//const userdb = process.env.USER_DB;
const app = express();
import routerApi from "./routes/index.js";

// Conexión con la base de datos
mongoose.connect(dburi);
const db = mongoose.connection;

db.on( 'error', () => {console.error({error})});

db.once('open', () => {console.log("Conexion con la DB correcta")});


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



