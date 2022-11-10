import { createContext, useState, useEffect } from "react"
import { Alert } from "react-native"
import { Position, User, UserUseCase } from "@domain/entities"
import { GitRepository, GitUser } from "@infrastructure/dto"
import { HttpRepository } from "@domain/repositories"


interface IUserContext {
    users: Array<User>,
    isLoading: boolean, 
    getUser: (username: string) => Promise<User|undefined>
    addUser: (username: string, position: Position) => Promise<boolean>
    updateUser:(username: string, position: Position) => Promise<boolean>
}

interface UserContextProps {
    children: JSX.Element
    userService: UserUseCase
    httpRepository: HttpRepository
}

export const UserContext = createContext<IUserContext>({} as IUserContext); 

export function UserContextProvider({ 
    children, 
    userService, 
    httpRepository }: UserContextProps){
    
    const [users, setUsers] = useState<Array<User>>([]);
    const [isLoading, setIsLoadig] = useState(false); 
      
    const getUser = async (username: string): Promise<User|undefined> => {
        try {
            const user = await userService.getUser(username);
            return user
        } catch (error) {
            if(error instanceof Error) Alert.alert(error.message)
        }
    }

    const addUser = async (username: string, position: Position): Promise<boolean> => {
        try {
            setIsLoadig(true)

            const promises = [
                httpRepository.get<GitUser>(`/${username}`),
                httpRepository.get<Array<GitRepository>>(`/${username}/repos`)
            ]

            const [responseUser, responseRepos] = await Promise.all(promises); 
            
            const user  = responseUser as unknown as GitUser
            const userRepos = responseRepos as unknown as Array<GitRepository>

            const techs: Array<string> = []

            userRepos.forEach(repo => {
                const isNewTech = !techs.find((tech) => repo.language == tech)
                if(isNewTech && repo.language){
                    techs.push(repo.language)
                }
            })

            const newUser: User = {
                email: user.email, 
                id: user.id, 
                phoroUrl: user.avatar_url, 
                techs: techs, 
                position: position, 
                username: user.login, 
                profileUrl: user.html_url
            }

            await userService.addUser(newUser)

            setIsLoadig(false)
            await listUsers()
            return true
        } catch(error) {
            setIsLoadig(false)
            if(error instanceof Error) Alert.alert(error.message)
            return false
        }
    }

    const updateUser = async (username: string, position: Position) => {
        try {
            await userService.updateUser(username, position)
            await listUsers()
            return true;
        } catch (error) {
            if(error instanceof Error) Alert.alert(error.message)
            return false;
        }
    }

    const listUsers = async () => {
        const response = await userService.listUsers()
        setUsers(response)
    }

    return (
        <UserContext.Provider value={{ users, isLoading, addUser, updateUser, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

