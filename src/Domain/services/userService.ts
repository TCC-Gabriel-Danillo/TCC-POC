import { User } from "../entities/models";
import { UserUseCase } from "../entities/usecases";
import { UserRepository } from "../repositories";

export class UserService implements UserUseCase {
    constructor(
        private userRepository:UserRepository, 
        ){}
        
    getUser(id: number): Promise<User> {
        return this.userRepository.getUser(id);
    }

    async addUser(user: User): Promise<void> {
       await this.userRepository.addUser(user); 
    }

    listUsers(): Promise<User[]> {
        return this.userRepository.listlUser();
    }

}