import { JwtAdapter } from '../../../config';
import { RegisterMemberDto} from '../../dtos/auth//register-member.dto'
import { CustomError } from '../../errors/custom.error';
import { UserAuthToken } from '../../interfaces';
import { AuthRepository } from '../../repositories/auth.repositories';



type SingToken = (payload: Object, duration?:string) => Promise<string | null>;


interface RegisterMemberUseCase {
    execute( registerMemberDto: RegisterMemberDto ) : Promise<UserAuthToken>
}


export class RegisterMember implements RegisterMemberUseCase{

    constructor(
        private readonly authRepository : AuthRepository,
        private readonly signToken : SingToken = JwtAdapter.generateToken,
    ){}
    


    async execute(registerMemberDto: RegisterMemberDto): Promise<UserAuthToken> {

        // Crear usuario
        const user = await this.authRepository.register( registerMemberDto );

        // Token
        const token = await this.signToken( {id:user.id} ,'2h' );
        if ( !token ) throw CustomError.internalServer('Error generate token');


        return {
            msg:'Member successfully created',
            token: token,
            user:{
                id: user.id,
                name: user.name,
                email:user.email
            }
            

        }

    }


}