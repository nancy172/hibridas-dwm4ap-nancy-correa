// Primero se importa cada ruta:
import UserRouter from "./usersRouter.js";

function routerAPI(app){
    // Se define cada ruta
    app.use('/api/users', UserRouter);
    // app.use('/api/products', productsRouter );
}

export default routerAPI;
