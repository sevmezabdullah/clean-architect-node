import { User } from "../../entities/User"

export interface IUserRepository {
    login(email: string): Promise<User>
    register(name: string, email: string, password: string, phone: string): Promise<string>
    getAllUser(): Promise<User[]>
    deleteUser(id: string): Promise<string>
    updateUser(id: string, user: User): Promise<string>
}