"use client"

import { SetStateAction, useState } from "react"
import { registeredUsers } from "../../../utils/users"
import { UserType } from "../../../utils/types"
import { deflate } from "zlib"

const LogIn = () =>{
    const [userInput, setUserInput]=useState<string | null>(null)

    const handleChange= (e: { target: { value: SetStateAction<string | null> } }) => {
        setUserInput(e.target.value)
        
    }

    const handleClick= () => {
        const loggedInUsers= registeredUsers.filter((user:UserType)=> user.name===userInput )
        if (loggedInUsers) {
            console.log(loggedInUsers[0])
        }

    }

    return (
    <div>
        <p>LogIn</p>
        <label htmlFor="user-input">Enter username</label>
        <input id="user-input" type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Log in</button>
    
    </div>
    )
}

export default LogIn;