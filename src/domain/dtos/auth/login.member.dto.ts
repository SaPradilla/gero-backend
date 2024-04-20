import { Validators } from "../../../config";


export class LoginMemberDto{

    constructor(
        public email: string,
        public password:string,
    ){}

    static login (object: {[key:string]:any}) : [string?, LoginMemberDto?]{

        const { email,password } = object;

        if (!email) return ['Missing email'];
        if ( !Validators.email.test(email)  ) return ['Emal is not valid'];
        if( !password ) return ['Missing password'];
        if( password.length < 6) return ['Password too short'];


        return[
            undefined,
            new LoginMemberDto(
                email,
                password
            )            
        ]

    }

}