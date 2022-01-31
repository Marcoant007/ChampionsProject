import { getCustomRepository, getRepository, Repository } from "typeorm";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import IUsersRepository from "./IUsersRepository";
import { User } from "../entities/User";
import { Pagination } from "../../../../../shared/infra/database/pagination";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>
    private pagination: Pagination

    constructor() {
        this.repository = getRepository(User)
    }


    public setPagination(pagination: Pagination) {
        this.pagination = pagination;
    }

    async findByCPF(cpf: string): Promise<User> {
        try {
            const findCPF = await this.repository.findOne({cpf});
            return findCPF
        } catch (error) {
            return error.message
        }
    }

    async find(): Promise<User[]> {
        try {
            const findUsers = await this.repository.find();
            return findUsers
        } catch (error) {
            return error.message
        }
    }

    async findByEmail(email: string): Promise<User> {
        try {
            const user = await this.repository.findOne({ email });
            return user
        } catch (error) {
            return error.message
        }
    }

    async create({ name, email, cpf, password, cellPhone, birthDate }: ICreateUserDTO): Promise<void> {
        try {
            const user = this.repository.create({
                name, email, cpf, password, cellPhone, birthDate
            });
            await this.repository.save(user)
        } catch (error) {
            return error.message
        }
    }

    async findById(id: string): Promise<User> {
        try {
            const user = await this.repository.findOne(id);
            return user
        } catch (error) {
            return error.message
        }
    }

}

export default UsersRepository