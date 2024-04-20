export class envs {
    
    static get PORT():number {
        const port: number = parseInt(process.env.PORT || '6100', 10);
        return port;
    }

    // static get JWT_SECRET():string {
    //     const jwtSecret = process.env.JWT_SECRET;
    //     return jwtSecret as string;
    // }
    
}