import { ProyectDatasource } from "../../domain/datasources/proyect.datasources";
import { RegisterProyectDto } from "../../domain/dtos/proyect/register-proyect.dto";
import { ProyectEntity } from "../../domain/entities/proyect.entity";
import { ProyectRepository } from "../../domain/repositories/proyect.repositories";


export class ProyectRepositoryImpl implements ProyectRepository{

    constructor(
        private readonly proyectDatasource : ProyectDatasource
    ){}

    register(registerProyect: RegisterProyectDto): Promise<ProyectEntity> {
        return this.proyectDatasource.register( registerProyect );
    }

    

}