import { Request, Response } from "express";
import { RegisterProyectDto } from "../../domain";
import { RegisterProyect } from "../../domain/use-cases";

import { ProyectRepository } from "../../domain/repositories/proyect.repositories";
import { Helpers } from "../../domain/helpers";

export class ProyectController {


    constructor(
        private readonly proyectRepository : ProyectRepository,
    ){}


    registerProyect  = (req:Request, res:Response)=>{

        const [error,registerProyectDto] = RegisterProyectDto.create(req.body);

        if( error ) return res.status(400).json({error});

        new RegisterProyect( this.proyectRepository )
            .execute( registerProyectDto! )
                .then( data=> res.json(data))
                .catch( err=> Helpers.HandleError(err,res))
        
    }

    editProyect = (req:Request, res:Response)=>{

        // const [error,]

    }
    

}