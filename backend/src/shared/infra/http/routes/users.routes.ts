import { Router } from "express";
import multer  from "multer";
import uploadConfig from "../../../../config/upload"
import CreateUserController from "../../../../modules/users/useCases/createUser/CreateUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
// const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/", createUserController.handle);
// usersRoutes.patch("/avatar", uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export default usersRoutes