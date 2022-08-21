import {  useContext } from "react"
import { UserContext } from "../context"

export const useUserService = () => useContext(UserContext);
