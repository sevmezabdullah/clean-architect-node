import { User } from "../entities/User";
import { IUserInteractor } from "../interfaces/user/IUserInteractor";

export class UserInteractor implements IUserInteractor {

    login(email: string, password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    register(name: string, email: string, password: string, phone: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getAllUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: string, user: User): Promise<string> {
        throw new Error("Method not implemented.");
    }

}