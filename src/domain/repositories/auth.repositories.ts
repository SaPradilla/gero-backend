import { MemberEntity } from "../entities/member.entity";
import { LoginMemberDto } from "../dtos/auth/login.member.dto";
import { RegisterMemberDto } from '../dtos/auth/register-member.dto';


export abstract class AuthRepository{

    // todo
    abstract login( loginMemberDto : LoginMemberDto) : Promise<MemberEntity>

    abstract register( registerMembeerDto : RegisterMemberDto ):Promise<MemberEntity>
}