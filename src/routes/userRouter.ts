import express from 'express'
import { Container } from 'inversify';
import { IUserInteractor } from '../interfaces/user/IUserInteractor';
import { INTERFACE_TYPE } from '../utils';
import { UserInteractor } from '../interactors/userInteractor';
import { IUserRepository } from '../interfaces/user/IUserRepository';
import { UserRepository } from '../repositories/userRepository';
import { UserController } from '../controllers/userController';
import { Token } from '../libs/token';
import { Hash } from '../libs/hash';

const userRouter = express.Router()


const container = new Container()

container.bind<IUserInteractor>(INTERFACE_TYPE.UserInteractor).to(UserInteractor)
container.bind<IUserRepository>(INTERFACE_TYPE.UserRepository).to(UserRepository)
container.bind(INTERFACE_TYPE.UserController).to(UserController)
container.bind(INTERFACE_TYPE.Token).to(Token)
container.bind(INTERFACE_TYPE.Hash).to(Hash)

const controller = container.get<UserController>(INTERFACE_TYPE.UserController)

export default userRouter;