import { User } from "../../domain/entities/models";
import { UserRepository } from "../../domain/repositories";
import { getFirestore, setDoc, doc, Firestore, getDoc  } from 'firebase/firestore';


export class UserRepositoryImp implements UserRepository {
    firestore: Firestore;
    constructor(){
        this.firestore = getFirestore()
    }

    async addUser(user: User): Promise<void> {
        await setDoc(doc(this.firestore, "users", user.username), user)
    }
    async getUser(username: string): Promise<User> {
        const docRef = doc(this.firestore, "users", username);
        const docSnap = await getDoc(docRef); 
        return docSnap.data() as User

    }
    async listlUser(): Promise<User[]> {
        const docsRef = doc(this.firestore, "users");
        const docsSnap = await getDoc(docsRef)
        if(!docsSnap.exists()) return []
        return docsSnap.data() as User[]
    }  
}