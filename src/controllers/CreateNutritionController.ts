import { FastifyRequest, FastifyReply } from "fastify";
import {CreateNutritionService} from "../services/CreateNutritionService"

export interface DataProps{
    name: string
    weihgt: string
    height: string
    age: string
    gender: string
    objective: string
    level: string
}

class CreateNutritionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, age, gender, height, weihgt, level, objective } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute({ name, age, gender, height, weihgt, level, objective });

        reply.send(nutrition);

    }
}

export { CreateNutritionController }