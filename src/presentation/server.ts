import express, { Router } from "express";


interface Options {
    port?:Number;
    routes: Router;
}

export class Server {
    
    public readonly app = express();
    private readonly port : Number;
    private readonly routes: Router;

    constructor (options : Options){

        const { port = 6000 , routes} = options;
        this.port = port;
        this.routes = routes;
    }

    async start(){

        // middleware
        this.app.use( express.json() )
        this.app.use( express.urlencoded({ extended: true}) )

        // usa las rutas definidas
        this.app.use( this.routes )
        
        this.app.listen(this.port, ()=>{
            console.log(`Server running in http://localhost:${this.port}`)
        });
    }
}