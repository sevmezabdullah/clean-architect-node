export interface IToken {
    generateToken(data: any): Promise<string>
    verifyToken(token: string): Promise<any>
}