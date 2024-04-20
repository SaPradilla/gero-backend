import { Validators } from "../../../config";



export class RegisterMemberDto {


    private constructor(

        public name:string,
        public email:string,
        public password:string,

    ) {}

    static create( object: {[key: string] : any}): [string?, RegisterMemberDto?] {

        // reglas para que los datos recibidos cumpla con los requisitos
        
        const {name, email, password} = object;

        if( !name ) return ['Missing name'];
        if( !email ) return ['Missing email'];
        if( !Validators.email.test(email) ) return ['Email is not valid'];
        if( !password ) return ['Missing password'];
        if( password.length < 6) return ['Password too short'];
        

        // si no hay errores, manda la instancia de la clase.
        return [
            undefined,
            new RegisterMemberDto(
                name,email,password
            )
        ];
    }
}