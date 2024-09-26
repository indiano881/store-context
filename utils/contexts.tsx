"use client"

import { createContext, useContext, useState} from "react";
import { UserContextType, UserType } from "./types";


//step1-context runs as first, very deep-INITIALIZATION
const UserContext = createContext<UserContextType | null>(null)

//step2-here gives value
export const UserProvider = ({children}:{children:React.ReactNode}) => {
    
    const [user,setUser] = useState<UserType | null>(null)
    
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>

    )
}

//step3-this is the function other componetns can call
export const useUserContext = () => {
    return useContext(UserContext)
}