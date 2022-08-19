import axios from "axios"; 

export const getGitInfo = async (): Promise<void> =>  {
    const response = await axios.get("https://api.github.com/users/gabrieldvpereira"); 
    console.log(response.data)
}   