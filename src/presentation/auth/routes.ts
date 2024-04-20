import { Router } from "express";
import { AuthController } from "./controllers";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middlewares";

export class AuthRoutes {

    constructor(){}

    static get routes(): Router{

        const router = Router();


        const datasource = new AuthDatasourceImpl()
        const authRepository = new AuthRepositoryImpl(datasource);
        // instanciar el controlador
        const controller = new AuthController(authRepository);


        router.post('/login', controller.loginUser );
        router.post('/register', controller.registerUser);


        router.get('/', AuthMiddleware.validateJwt, controller.getUsers)

        return router;
    }

}