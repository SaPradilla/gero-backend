import { CustomError } from "../../domain";
import { ProyectEntity } from "../../domain/entities/proyect.entity";


export class ProyectMapper {

    static proyectEntityFromObject( object:{[key:string]:any} ){

        const { id,name,description,start_date,end_date,created_by } = object;


        if(!created_by) throw CustomError.badRequest('Missing id member(created by)')
        if(!id) throw CustomError.badRequest('Missing id');
        if(!name) throw CustomError.badRequest('Missing name');
        if(!description) throw CustomError.badRequest('Missing description');
        if(!start_date) throw CustomError.badRequest('Missing start date');
        if(!end_date) throw CustomError.badRequest('Missing end date');


        return new ProyectEntity(
            id,
            name,
            description,
            start_date,
            end_date,
            created_by,
        )

    }



}