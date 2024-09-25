"use client"

import { createContext, useContext, useState} from "react";
import { UserContextType, UserType } from "./types";


//context runs as first, very deep
const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({children}:{children:React.ReactNode}) => {
    
    const [user,setUser] = useState<UserType | null>(null)
    
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>

    )
}