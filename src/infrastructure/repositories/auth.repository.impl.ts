import { AuthDatasource, AuthRepository, MemberEntity, RegisterMemberDto } from "../../domain";
import { LoginMemberDto } from "../../domain/dtos/auth/login.member.dto";



export class AuthRepositoryImpl implements AuthRepository{
    
    constructor(
        private readonly authDatasource: AuthDatasource,
    ){}
    
    login(loginMemberDto: LoginMemberDto): Promise<MemberEntity> {
        return this.authDatasource.login( loginMemberDto );
    }


    register(registerMembeerDto: RegisterMemberDto): Promise<MemberEntity> {
        return this.authDatasource.register( registerMembeerDto );
    }

}