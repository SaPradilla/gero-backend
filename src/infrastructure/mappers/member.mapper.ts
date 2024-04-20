import { CustomError, MemberEntity } from "../../domain";


export class MemberMapper {

    static memberEntityFromObject(object: { [ key:string]:any }) {
        const {id, name, email, password} = object;

        if( !id ) throw CustomError.badRequest('Missing id')
        if( !name ) throw CustomError.badRequest('Missing name');
        if( !email ) throw CustomError.badRequest('Missing email');
        if( !password ) throw CustomError.badRequest('Missing password');
    

        return new MemberEntity(
            id,
            name,
            email,
            password
        );
    
    }

}