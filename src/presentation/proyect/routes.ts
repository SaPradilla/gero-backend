import { Router } from "express";
import { ProyectDatasourceImpl, ProyectRepositoryImpl } from "../../infrastructure";
import { ProyectController } from "./controllers";


export class ProyectRoutes {


    constructor(){}


    static get routes(): Router{

        const router = Router()


        const datasource = new ProyectDatasourceImpl();
        const proyectRepository = new ProyectRepositoryImpl(datasource);

        const controller = new ProyectController(proyectRepository);


        router.post('/register',controller.registerProyect);
        router.post('/edit/:id',controller.editProyect)
        
        return router;

    }

}