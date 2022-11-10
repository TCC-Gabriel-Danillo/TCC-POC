import { Position, User } from "../entities/models";

export interface UserRepository {
    addUser(user: User): Promise<void>
    updateUser(username: string, userPosition: Position): Promise<void>
    getUser(username: string): Promise<User>
    listlUser(): Promise<Array<User>>
}