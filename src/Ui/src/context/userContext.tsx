import { createContext, useState, useEffect, useContext } from "react"
import { Position, User, UserUseCase } from "@domain/entities"
import { GitUser } from "@infrastructure/dto"
import { HttpRepository } from "@domain/repositories"


interface IUserContext {
    users: Array<User>,
    isLoading: boolean, 
    addUser: (username: string, position: Position) => Promise<void>
}

interface UserContextProps {
    children: JSX.Element
    userService: UserUseCase
    httpRepository: HttpRepository

}

const UserContext = createContext<IUserContext>({} as IUserContext); 

export function UserContextProvider({ 
    children, 
    userService, 
    httpRepository }: UserContextProps){
    
    const [users, setUsers] = useState<Array<User>>([]);
    const [isLoading, setIsLoadig] = useState(false); 
    
    useEffect(() => {
       (
       async () => {
            const response = await userService.listUsers()
            console.log(response)
            setUsers(response)
       }
       )()
    }, [])

    const addUser = async (username: string, position: Position) => {
        const gitUsers = await httpRepository.get<GitUser>(`/gabrieldvpereira`); 
        console.log(gitUsers); 
    }

    return (
        <UserContext.Provider value={{ users, isLoading, addUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserService = () => useContext(UserContext);
