
export class ProyectEntity{
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public start_date: Date,
        public end_date: Date,
        public created_by: number
    ){}
}