import { Request, Response } from "express"
import { AuthRepository, CustomError, RegisterMemberDto } from "../../domain"
import { JwtAdapter } from "../../config";
import prisma from "../../../prisma";
import { LoginMemberDto } from "../../domain/dtos/auth/login.member.dto";

import { RegisterMember,LoginMember } from "../../domain/use-cases";
import { Helpers } from "../../domain/helpers";

 

export class AuthController{

    constructor(
        private readonly authRepository : AuthRepository,

    ){}

    registerUser = (req: Request, res: Response) =>{

        const [error,registerMemberDto] = RegisterMemberDto.create(req.body);

        if( error ) return res.status(400).json({error}) 
        
        new RegisterMember( this.authRepository)
            .execute( registerMemberDto! )
                .then( data => res.json(data) )
                .catch( err => Helpers.HandleError(err,res) )
    }
    loginUser = (req: Request, res: Response)=>{

        const [error, loginMemberDto] = LoginMemberDto.login(req.body);

        if(error) return res.status(400).json({error})

        new LoginMember(this.authRepository )
            .execute( loginMemberDto! )
                .then( data => res.json(data))
                .catch( err => Helpers.HandleError(err,res) )

    }


    getUsers = (req: Request, res: Response) =>{

        prisma.member.findMany()
            .then(members => {
                res.json({
                    // members,
                    member: req.body.member
                })
            })
            .catch(err => res.status(500).json({error:'Internal server error' }))

    }


}