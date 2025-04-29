import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret_key = process.env.SECRET_KEY;

const validacionToken = (req, res, next) => {
    const auth = req.headers.authorization;

    if(!auth){
        res.status(401).json({msg: "No se encontró el jwt"});
    }

    
}

export {validacionToken}
