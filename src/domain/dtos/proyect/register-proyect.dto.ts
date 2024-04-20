
export class RegisterProyectDto{

    constructor(
        public name:string,
        public description:string,
        public start_date:Date,
        public end_date:Date,
        public created_by: number
    ){}


    static create (object:{[key:string]:any}) : [string?,RegisterProyectDto?]{

        const {name,description,start_date,end_date,created_by} = object;


        if(!created_by) return ['Missing id member(created by)']
        if(!name) return ['Missing name'];
        if(!description) return ['Missing desciption'];
        if(!start_date) return ['Missing start date'];
        if(!end_date) return ['Missing end date'];
        
        return [
            undefined,
            new RegisterProyectDto (
                name,
                description,
                start_date,
                end_date,
                created_by
            )
        ]
    }

}