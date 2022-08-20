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
         // https://api.github.com/users/gabrieldvpereira
         // https://api.github.com/users/GabrielDVpereira/repos
        return this.userRepository.addUser(username, position); 
    }

    listUsers(): Promise<User[]> {
        return this.userRepository.listlUser();
    }

}