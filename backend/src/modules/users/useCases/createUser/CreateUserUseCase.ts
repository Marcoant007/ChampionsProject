import { Hash } from "crypto";
import { inject, injectable } from "tsyringe";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../infra/typeorm/repositories/IUsersRepository";
import {hash} from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor
        (
            @inject("UsersRepository")
            private usersRepository: IUsersRepository
        ) { }

    async execute({  name, email, cpf, password, cellPhone, birthDate}: ICreateUserDTO): Promise<void> {
        const passwordHash = await hash(password, 8);

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError("User Already Exists", 400)
        }

        await this.usersRepository.create({
            name, email, cpf, password, cellPhone, birthDate
        })
    }
}

export default CreateUserUseCase