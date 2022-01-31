import { Router } from "express";
import multer  from "multer";
import CreateUserController from "../../modules/users/useCases/user/createUser/CreateUserController";
import ListUserController from "../../modules/users/useCases/user/listUserUseCase/ListUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
// const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUserController.handle);
// usersRoutes.patch("/avatar", uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export default usersRoutes