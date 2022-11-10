import { Position, User } from "../models"

export interface UserUseCase {
    getUser(username: string): Promise<User>
    updateUser(username: string, position:Position): Promise<void>
    addUser(user: User): Promise<void>
    listUsers(): Promise<Array<User>>
}
