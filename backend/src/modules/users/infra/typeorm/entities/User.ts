import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserTypeEnum } from "./UserTypeEnum";

@Index("pk_user", ["id"], { unique: true })
@Entity("user")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    active: boolean;

    @Column()
    email: string;

    @Column({ name: "email_checked" })
    emailChecked: boolean;

    @Column({ name: "url_img" })
    urlImg: string | null;

    @Column()
    blocked: boolean;

    @Column()
    cpf: string;

    @Column({
        name: "user_type",
        type: "enum",
        enum: UserTypeEnum
    })
    userType: UserTypeEnum;

    @Column({ name: "first_acess" })
    firstAcess: boolean;

    @Column()
    attempt: number | null;

    @Column({ name: "cellphone" })
    cellPhone: string;

    @Column({ name: "birth_date" })
    birthDate: Date;

    @Column({ name: "comercial_phone" })
    comercialPhone: string;

    @Column()
    deleted: boolean = false;

}