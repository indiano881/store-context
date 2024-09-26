"use client"

import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";
import LogIn from "../LogIn";
import Menu from "../Menu";


const LogInWrapper = ({children}:{children:React.ReactNode}) => {
    //we have to tell not to use null, so we use aliases
    const {user} =useUserContext() as UserContextType;

    return (
    <div>
    {/*controller here we choose what to show */}
    {!user ? <LogIn /> :
        <>
            <Menu/>
            <h2>Hi {user.name}! Welcome to Pandoran!</h2>
            <h3>Check the latest {user.category} products!</h3>
            <h3> As a {user.membership} member you get a {user.membership==="gold" ? 10 : user.membership==="platinum" ? 20 : 5} discount</h3>
            {children}
        </>
    
    }
    
    </div>
    )
}

export default LogInWrapper;