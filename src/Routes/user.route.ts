import express from 'express';
import UserControllers from '../Controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/signup').post(UserControllers.createUser);

userRouter.route('/').get(UserControllers.getAllUser);

export default userRouter;