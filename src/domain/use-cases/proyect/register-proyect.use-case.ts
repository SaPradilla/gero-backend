import { RegisterProyectDto } from "../../dtos/proyect/register-proyect.dto";
import { ProyectInterface } from "../../interfaces";
import { ProyectRepository } from "../../repositories/proyect.repositories";


export class RegisterProyect {

    constructor (
        private readonly proyectRepository: ProyectRepository,
    ){}


    async execute (registerProyectDto : RegisterProyectDto): Promise<ProyectInterface> {

        // crear proyecto
        const proyect = await this.proyectRepository.register(registerProyectDto);

        return {
            msg:'Proyect succesfully created',
            proyect:{
                id:proyect.id,
                name:proyect.name,
                start_date:proyect.start_date,
                end_date:proyect.end_date,
                created_by:proyect.created_by
            }
        }

    }

}