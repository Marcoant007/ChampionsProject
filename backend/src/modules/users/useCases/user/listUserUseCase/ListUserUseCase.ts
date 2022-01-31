import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../shared/errors/AppError";
import { Pagination } from "../../../../../shared/infra/database/pagination";
import UserDTO from "../../../dtos/UserDTO";
import { User } from "../../../infra/typeorm/entities/User";
import IUsersRepository from "../../../infra/typeorm/repositories/IUsersRepository";

@injectable()
class ListUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(): Promise<User[]>{
        try {
            const userDB = await this.usersRepository.find();
            return userDB
        } catch (error) {
            throw new AppError("Erro no UseCase", error.message)
        }
    }
}

export default ListUserUseCase