import { Position, User } from "../../Domain/entities/models";
import { HttpRepository, UserRepository } from "../../Domain/repositories";
import { getFirestore, setDoc, doc, Firestore  } from 'firebase/firestore';


export class UserRepositoryImp implements UserRepository {
    firestore: Firestore;
    constructor(private http: HttpRepository){
        this.firestore = getFirestore()
    }

    addUser(username: string, position: Position): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUser(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }
    listlUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}