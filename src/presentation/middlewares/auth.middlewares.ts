import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import prisma from "../../../prisma";


export class AuthMiddleware {

    static  validateJwt = async(req: Request, res:Response, next: NextFunction) =>{
        

        const authorization = req.header('Authorization');
        // sino se envio el header
        if( ! authorization ) return res.status(401).json({ error : ' No token provided'});
        // si el envio el token de forma correcta
        if( !authorization.startsWith('Bearer ') ) return res.status(401).json({ error : ' Invalidad Bearer token'});
        
        const token = authorization.split(' ').at(1) ?? '';

        try {
            const payload = await JwtAdapter.validateToken<{id:number}>(token);
            if( !payload ) return res.status(401).json({error:'Invalid token'})

            const member = await prisma.member.findUnique({where:{id:payload.id}})
            if( !member ) return res.status(401).json({error:'Invalid token - user not exits'});


            req.body.member = member;


            next();

        } catch (error) {
            console.log(error);
            res.status(500).json({error:'Internal server error'})
        }


    }

}