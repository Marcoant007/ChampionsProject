import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserUseCase from "./CreateUserUseCase";

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {  name, email, cpf, password, cellPhone, birthDate } = request.body
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const users = await createUserUseCase.execute({  name, email, cpf, password, cellPhone, birthDate})
        return response.status(200).json(users);
    }
}

export default CreateUserController