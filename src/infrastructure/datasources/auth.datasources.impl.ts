import { AuthDatasource, CustomError, MemberEntity, RegisterMemberDto } from "../../domain";

import prisma from "../../../prisma";
import { BcryptAdapter } from "../../config";
import { MemberMapper } from "../mappers/member.mapper";
import { LoginMemberDto } from "../../domain/dtos/auth/login.member.dto";

type hashFunction = (password : string) => string;
type compareFunction = (password : string, hashed:string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource{


    constructor(
        private readonly hashPassword : hashFunction =  BcryptAdapter.hash,
        private readonly comparePassword : compareFunction = BcryptAdapter.compare,
    ){}
    
    async login(loginMemberDto: LoginMemberDto): Promise<MemberEntity> {

        const { email, password } = loginMemberDto;

        try {
            
            //TODO: Buscar el usuario  
            const member = await prisma.member.findFirst({
                where: {
                    email: email
                }
            })

            if ( !member ) throw CustomError.unauthorized('Credenciales Incorrectas');

            //TODO: Verificar que la contrasena este correcta
            if(!this.comparePassword( password, member.password ) ) throw CustomError.unauthorized('Credenciales Incorrectas')
            
            return MemberMapper.memberEntityFromObject(member)

        } catch (error) {
            if( error instanceof CustomError){
                throw error;
            }
            throw CustomError.internalServer();
        }


    }
    
    async register(registerMembeerDto: RegisterMemberDto): Promise<MemberEntity> {

        const { name, email, password } = registerMembeerDto;

        try {
            // verificar si el correo existe
            const exitsEmail = await prisma.member.findFirst({
                where: {
                    email: email
                }
            })

            if ( exitsEmail ) throw CustomError.badRequest("Credenciales Incorrectas");

            const member = await prisma.member.create({
                data:{
                    name: name,
                    email: email,
                    password: this.hashPassword( password ),
                }
            })
            // mapear la respuesta a la entidad
            return MemberMapper.memberEntityFromObject(member);
            


        } catch (error) {
            
            if( error instanceof CustomError){
                throw error;
            }
            throw CustomError.internalServer();

        }


    }




}