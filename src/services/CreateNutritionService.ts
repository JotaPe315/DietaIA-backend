import { DataProps } from '../controllers/CreateNutritionController'
import {GoogleGenerativeAI  } from '@google/generative-ai'

class CreateNutritionService {
    async execute({name, age, gender, height, weihgt, level, objective}: DataProps) {
        
        try {
            const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

            const response = await model.generateContent(`Em que ano o Javascript foi criado`)

            console.log(JSON.stringify(response, null, 2));

            if (response.response && response.response.candidates) {
                const jsonText = response.response.candidates[0]?.content.parts[0].text as string;

                return { data: jsonText }
            }

            

        } catch (err) {
            console.error("Erro JSON: ", err)
            throw new Error("Falied create.")
        }
        
    }
}
export { CreateNutritionService }