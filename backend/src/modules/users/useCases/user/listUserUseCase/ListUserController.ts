import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../../shared/errors/AppError";
import ListUserUseCase from "./ListUserUseCase";

class ListUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listUsers = container.resolve(ListUserUseCase);
            const usersDB = await listUsers.execute();
            return response.json(usersDB)
        } catch (error) {
            throw new AppError("Erro no Controller", error.message)
        }
    }

}

export default ListUserController