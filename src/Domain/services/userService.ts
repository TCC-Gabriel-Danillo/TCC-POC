import { User } from "../entities/models";
import { UserUseCase } from "../entities/usecases";
import { UserRepository } from "../repositories";

export class UserService implements UserUseCase {
    constructor(
        private userRepository:UserRepository, 
    ){}
        
    getUser(username: string): Promise<User> {
        return this.userRepository.getUser(username);
    }

    addUser(user: User): Promise<void> {
         // https://api.github.com/users/gabrieldvpereira
         // https://api.github.com/users/GabrielDVpereira/repos
        return this.userRepository.addUser(user); 
    }

    listUsers(): Promise<User[]> {
        return this.userRepository.listlUser();
    }

}