import { User } from "../infra/typeorm/entities/User";
import { UserTypeEnum } from "../infra/typeorm/entities/UserTypeEnum";

export default class UserDTO {
    name: string;
    cpf: string;
    email: string;
    password: string;
    id?: number; 
    cellPhone?: string;
    birthDate?: Date;
    userType?: UserTypeEnum;

    constructor(user: User) {
        this.id = user.id
        this.name = user.name;
        this.email = user.email;
        this.cpf = user.cpf;
        this.cellPhone = user.cellPhone;
        this.userType = user.userType;
    }
}
