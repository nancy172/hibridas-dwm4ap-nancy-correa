import UserRouter from "./userRouter.js";

function routerAPI(app){
    app.use('/api/users', UserRouter);
}

export default routerAPI;
