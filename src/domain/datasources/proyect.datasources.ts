import { EditProyectDto } from "../dtos/proyect/edit-proyecto.dto";
import { RegisterProyectDto } from "../dtos/proyect/register-proyect.dto";
import { ProyectEntity } from "../entities/proyect.entity";

export abstract class ProyectDatasource{

    abstract register( registerProyect: RegisterProyectDto  ) : Promise<ProyectEntity>
    abstract edit( editProyect: EditProyectDto) : Promise<ProyectEntity>
}   