"use client"

import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";
import HBMenu from "../HBMenu";
import LogIn from "../LogIn";


const LogInWrapper = ({children}:{children:React.ReactNode}) => {
    //we have to tell not to use null, so we use aliases
    const {user} =useUserContext() as UserContextType;

    return (
    <div>
    {/*controller here we choose what to show */}
    {!user ? <LogIn /> :
        <>
          
            <div className="bg-pt-primary text-white text-2xl text-center p-4 flex justify-center">
                <h2 className="border-4 rounded-full border-pt-secondary p-2">Hi <span className="text-pt-secondary">{user.name}</span>! As a <span className="text-pt-secondary">{user.membership}</span> member you get a <span className="text-pt-secondary">{user.membership==="gold" ? 10 : user.membership==="platinum" ? 20 : 5}</span> discount!</h2>
            </div>
            
            
            {children}
        </>
    
    }
    
    </div>
    )
}

export default LogInWrapper;