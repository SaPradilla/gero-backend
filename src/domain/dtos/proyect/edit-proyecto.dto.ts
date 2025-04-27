


export class EditProyectDto{

    constructor(
        public name:string,
        public description:string,
        public start_date:Date,
        public end_date:Date,
    ){}


    
    static edit(object:{[key:string]:any}) : [string?,EditProyectDto?]{


        const {name,description,start_date,end_date} = object;


        if(!name) return ['Missing name'];
        if(!description) return ['Missing desciption'];
        if(!start_date) return ['Missing start date'];
        if(!end_date) return ['Missing end date'];

        return [
            undefined,
            new EditProyectDto(
                name,
                description,
                start_date,
                end_date
            )
        ]

    }

}