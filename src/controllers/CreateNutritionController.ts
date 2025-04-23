import { FastifyRequest, FastifyReply } from "fastify";
import {CreateNutritionService} from "../services/CreateNutritionService"

export interface DataProps{
    name: string
    weight: string
    height: string
    age: string
    gender: string
    objective: string
    level: string
}

class CreateNutritionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, age, gender, height, weight, level, objective } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute({ name, age, gender, height, weight, level, objective });

        reply.send(nutrition);

    }
}

export { CreateNutritionController }