import { inject, injectable } from "inversify";
import { IUserInteractor } from "../interfaces/user/IUserInteractor";
import { INTERFACE_TYPE } from "../utils";
import { Request, Response } from "express";


@injectable()
export class UserController {

    private interactor: IUserInteractor;

    constructor(
        @inject(INTERFACE_TYPE.UserInteractor) interactor: IUserInteractor) {
        this.interactor = interactor;
    }

    async onLogin(req: Request, res: Response) {

        const { email, password } = req.body
        try {
            const token = await this.interactor.login(email, password)
            if (token) {
                return res.status(200).json({
                    token
                })
            } else {
                return res.status(400).json({
                    message: "Invalid email or password"
                })
            }
        } catch (error) {
            return res.status(500).json({ error })
        }

    }

    async onRegister(req: Request, res: Response) {
        const { name, email, password, phoneNumber } = req.body
        try {
            const result = await this.interactor.register(name, email, password, phoneNumber)
            if (result) {
                return res.status(200).json({
                    message: "Register success"
                })
            } else {
                return res.status(400).json({
                    message: "Register failed"
                })
            }

        } catch (error) {
            return res.status(500).json({ error })
        }
    }
    async onGetAllUser(req: Request, res: Response) {
        try {
            const users = await this.interactor.getAllUser()
            if (users) {
                return res.status(200).json(users)
            }
            else {
                return res.status(400).json([])
            }
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    async onUpdateUser(req: Request, res: Response) {
        const { id, name, email, password, phoneNumber } = req.body

        try {
            const result = await this.interactor.updateUser(id, { name, email, password, phoneNumber })
            if (result) {
                return res.status(200).json({
                    message: "Update success"
                })
            } else {
                return res.status(400).json({
                    message: 'Update failed'
                })
            }
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }

    async onDeleteUser(req: Request, res: Response) {
        const { id } = req.body
        try {
            const result = await this.interactor.deleteUser(id)
            if (result) {
                return res.status(200).json({
                    message: "Delete success"
                })
            } else {
                return res.status(400).json({
                    message: 'Delete Failed'
                })
            }
        } catch (error) {
            return res.status(500).json({ error })
        }
    }


}