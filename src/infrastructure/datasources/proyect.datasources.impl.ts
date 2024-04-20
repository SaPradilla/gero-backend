import prisma from "../../../prisma";
import { CustomError } from "../../domain";
import { ProyectDatasource } from "../../domain/datasources/proyect.datasources";
import { RegisterProyectDto } from "../../domain/dtos/proyect/register-proyect.dto";
import { ProyectEntity } from "../../domain/entities/proyect.entity";
import { ProyectMapper } from "../mappers/proyect.mapper";


export class ProyectDatasourceImpl implements ProyectDatasource{

    async register(registerProyect: RegisterProyectDto): Promise<ProyectEntity> {

        const { name,description,start_date, end_date, created_by } = registerProyect;


        try {
            
            // TODO: Verificar que el nombre del proyecto no exista

            const nameExist = await prisma.proyect.findFirst({
                where:{
                    name:name
                }
            })

            if( nameExist ) throw CustomError.badRequest('Project name already exists');


            const proyect = await prisma.proyect.create({
                data:{
                    name:name,
                    description:description,
                    start_date:start_date,
                    end_date:end_date,
                    created_by:created_by
                }
            })

            return ProyectMapper.proyectEntityFromObject(proyect)

        } catch (error) {
            console.log(error)
            if( error instanceof CustomError){
                throw error;
            }
            throw CustomError.internalServer();
        }




    }



}