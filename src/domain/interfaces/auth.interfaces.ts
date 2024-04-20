

export interface UserAuthToken {
    msg:string;
    token: string;
    user:{
        id:number;
        name:string;
        email:string;
    }
}