import { User, Position } from "../models"

export interface UserUseCase {
    getUser(id: number): Promise<User>
    addUser(user: User): Promise<void>
    listUsers(): Promise<Array<User>>
}