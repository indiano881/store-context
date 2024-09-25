"use client"

import { SetStateAction, useState } from "react"
import { registeredUsers } from "../../../utils/users"

const LogIn = () =>{
    const [userInput, setUserInput]=useState<string | null>(null)

    const handleChange= (e: { target: { value: SetStateAction<string | null> } }) => {
        setUserInput(e.target.value)
        
    }

    const handleClick= () => {

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