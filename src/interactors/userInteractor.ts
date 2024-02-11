import { inject, injectable } from "inversify";
import { User } from "../entities/User";
import { IUserInteractor } from "../interfaces/user/IUserInteractor";
import { IUserRepository } from "../interfaces/user/IUserRepository";
import { INTERFACE_TYPE } from "../utils";
import { IToken } from "../interfaces/IToken";
import { IHash } from "../interfaces/IHash";

@injectable()
export class UserInteractor implements IUserInteractor {

    private repository: IUserRepository
    private token: IToken
    private hash: IHash

    constructor(@inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository, @inject(INTERFACE_TYPE.Token) token: IToken,
        @inject(INTERFACE_TYPE.Hash) hash: IHash) {
        this.repository = repository
        this.token = token
        this.hash = hash
    }


    async login(email: string, password: string): Promise<string> {

        const user = await this.repository.login(email);
        if (user) {
            const isCorrect = await this.hash.comparePassword(password, user.password ?? '')

            if (isCorrect) {
                const token = await this.token.generateToken(user)
                return token
            } else {
                throw new Error("Email or password incorrect")
            }

        } else {
            throw new Error("User does not exists")
        }
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