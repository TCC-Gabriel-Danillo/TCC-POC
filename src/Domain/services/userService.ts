import { Position, User } from "../entities/models";
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
        return this.userRepository.addUser(user); 
    }

    updateUser(userName: string, position: Position):Promise<void>{
        return this.userRepository.updateUser(userName, position)
    }

    listUsers(): Promise<User[]> {
        return this.userRepository.listlUser();
    }

}