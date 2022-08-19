import { User, Position } from "../entities/models";

export interface UserRepository {
    addUser(username: string, position: Position): Promise<void>
    getUser(id: number): Promise<User>
    listlUser(): Promise<Array<User>>
}