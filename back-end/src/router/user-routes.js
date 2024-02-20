
import express from "express";
import { createUser, getAllUsers, getUser } from "../controller/user-controller.js";
import { login } from "../controller/login-controller.js";

import { verifyToken } from "../middleware/auth.js";
export const userRouter = express.Router();



userRouter.get('/users', verifyToken, getAllUsers);
userRouter.get('/user/', verifyToken, getUser);
userRouter.post('/user', createUser);
userRouter.post('/login', login)

    
  