import { User } from "../entities/models";

export interface UserRepository {
    addUser(user: User): Promise<void>
    getUser(id: number): Promise<User>
    listlUser(): Promise<Array<User>>
}