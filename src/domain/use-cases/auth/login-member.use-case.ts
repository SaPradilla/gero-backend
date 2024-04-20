import { JwtAdapter } from "../../../config";
import { LoginMemberDto } from "../../dtos/auth/login.member.dto";
import { CustomError } from "../../errors/custom.error";
import { UserAuthToken } from "../../interfaces";
import { AuthRepository } from "../../repositories/auth.repositories";


type SingToken = (payload: Object, duration?:string) => Promise<string | null>;

interface LoginMemberUseCase {
    execute( loginMemberDto: LoginMemberDto ) : Promise<UserAuthToken>
}

export class LoginMember implements LoginMemberUseCase{

    constructor (
        private readonly authRepository : AuthRepository,
        private readonly singToken : SingToken = JwtAdapter.generateToken,
    ){}


    async execute(loginMemberDto: LoginMemberDto): Promise<UserAuthToken> {
        
        // TODO:

        // buscar usuario por correo
        const user = await this.authRepository.login( loginMemberDto );

        // obtener token

        const token = await this.singToken( {id:user.id}, '2h' );
        if ( !token ) throw CustomError.internalServer('Error generate token');


        return {
            msg:'Inicio de sesion exitoso',
            token:token,
            user:{
                id: user.id,
                name: user.name,
                email:user.email  
            }

        }

    }


}


