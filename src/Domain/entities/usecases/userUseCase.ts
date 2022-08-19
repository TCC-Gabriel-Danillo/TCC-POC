import { Position, User } from "../models"

export interface UserUseCase {
    getUser(id: number): Promise<User>
    addUser(username: string, position: Position): Promise<void>
    listUsers(): Promise<Array<User>>
}