import { Position, User } from "../entities/models";
import { UserUseCase } from "../entities/usecases";
import { UserRepository } from "../repositories";

export class UserService implements UserUseCase {
    constructor(
        private userRepository:UserRepository, 
    ){}
        
    getUser(id: number): Promise<User> {
        return this.userRepository.getUser(id);
    }

    addUser(username: string, position: Position): Promise<void> {
        return this.userRepository.addUser(username, position); 
    }

    listUsers(): Promise<User[]> {
        return this.userRepository.listlUser();
    }

}