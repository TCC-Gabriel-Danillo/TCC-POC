import { User, Position } from "../entities/models";

export interface UserRepository {
    addUser(user: User): Promise<void>
    getUser(username: string): Promise<User>
    listlUser(): Promise<Array<User>>
}