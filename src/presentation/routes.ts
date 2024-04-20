import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { ProyectRoutes } from "./proyect/routes";

export class AppRoutes {

    constructor(){}

    static get routes(): Router{

        const router = Router();
        
        router.use('/api/auth', AuthRoutes.routes );
        router.use('/api/proyect', ProyectRoutes.routes )
        return router;
    }

}