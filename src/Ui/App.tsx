import "./src/config/firebaseConfig"
import { Routes } from "./src/navigation"
import { UserContextProvider } from "./src/context"
import {UserRepositoryImp, HttpRepositoryImp } from "@infrastructure/repositories"
import { UserService } from "@domain/services"

export default function App() {

  const userRepository = new UserRepositoryImp(); 
  const userService = new UserService(userRepository); 
  const httpRepository = new HttpRepositoryImp("https://api.github.com/users"); 

  return (
    <UserContextProvider
      userService={userService}
      httpRepository={httpRepository}
    >
      <Routes />
    </UserContextProvider>
  );
}

