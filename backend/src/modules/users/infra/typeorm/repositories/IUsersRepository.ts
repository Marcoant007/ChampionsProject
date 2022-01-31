import Either from "../../../../../config/Either";
import { Pagination } from "../../../../../shared/infra/database/pagination";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import { User } from "../entities/User";


interface IUsersRepository {
    create(data:ICreateUserDTO) : Promise<void>;
    findByEmail(email:string):Promise<User>;
    findByCPF(cpf:string): Promise<User>;
    findById(id: string): Promise<User>;
    find(): Promise<User[]>
    setPagination(pagination: Pagination): void;

}

export default IUsersRepository