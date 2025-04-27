import { Server } from "./presentation/server";
import {envs} from './config';
import { AppRoutes } from "./presentation/routes";

(()=>{
    main();
})()

async function main (){
    // levantar el servidor

    new Server({
        port: process.env.PORT,
        routes: AppRoutes.routes
    }).start()
}

