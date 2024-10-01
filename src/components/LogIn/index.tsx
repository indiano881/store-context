"use client"

import { SetStateAction, useState } from "react"
import { registeredUsers } from "../../../utils/users"
import { UserContextType, UserType } from "../../../utils/types"
import { useUserContext } from "../../../utils/contexts"
import RotatingWords from "../RotatingWords/RotatingWords"

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

    return (<>

    <RotatingWords />
    <div className="bg-pt-primary text-white flex flex-col items-center">
        
        <label htmlFor="user-input" className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center">Enter username</label>
        <input id="user-input" type="text" onChange={handleChange} className="text-black"/>
        <button onClick={handleClick} className="rounded-full border-4 border-white py-1 px-8 text-2xl mt-6 mb-14 max-w-[180px] bg-pt-secondary hover:bg-pt-primary text-white text-center">Log in</button>
    
    </div>
    </>
    )
}

export default LogIn;