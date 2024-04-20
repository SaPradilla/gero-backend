
import { Response } from "express";
import { CustomError } from "../errors/custom.error";


export class Helpers {

    // Validar si el error es nuestro  o de la app
    static HandleError(error:unknown, res: Response){
        // es error nuestro
        if( error instanceof CustomError ) return res.status(error.statusCode).json({msg: error.message});

        // sino error de la aplicacion
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error '});
    }

}