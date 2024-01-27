import { User } from "../../entities/User"

export interface IUserInteractor {

    login(email: string, password: string): Promise<string>
    register(name: string, email: string, password: string, phone: string): Promise<string>
    getAllUser(): Promise<User[]>
    deleteUser(id: string): Promise<string>
    updateUser(id: string, user: User): Promise<string>
}