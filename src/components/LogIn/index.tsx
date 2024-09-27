"use client"

import { SetStateAction, useState } from "react"
import { registeredUsers } from "../../../utils/users"
import { UserContextType, UserType } from "../../../utils/types"
import { useUserContext } from "../../../utils/contexts"

const LogIn = () =>{
    const [userInput, setUserInput]=useState<string | null>(null)

    const {setUser}= useUserContext() as UserContextType;

    const handleChange= (e: { target: { value: SetStateAction<string | null> } }) => {
        setUserInput(e.target.value)
        
    }

    const handleClick= () => {
        const loggedInUsers= registeredUsers.filter((user:UserType)=> user.name===userInput )
        if (loggedInUsers) {
            console.log(loggedInUsers[0])
            setUser(loggedInUsers[0])
        } else {
            console.log( "user not found")
        }

    }

    return (
    <div>
        <p>LogIn</p>
        <label htmlFor="user-input">Enter username</label>
        <input id="user-input" type="text" onChange={handleChange}/>
        <button onClick={handleClick} className="bg-red-700">Log in</button>
    
    </div>
    )
}

export default LogIn;