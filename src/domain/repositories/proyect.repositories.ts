import { RegisterProyectDto } from "../dtos/proyect/register-proyect.dto";
import { ProyectEntity } from "../entities/proyect.entity";

export abstract class ProyectRepository{

    
    abstract register( registerProyect: RegisterProyectDto  ) : Promise<ProyectEntity>

}