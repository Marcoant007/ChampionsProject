interface ICreateUserDTO {
    name: string;
    cpf: string;
    email: string;
    password: string;
    id?: string; 
    cellPhone?: string;
    birthDate?: Date
}

export default ICreateUserDTO