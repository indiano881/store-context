import Link from "next/link"
import { useUserContext } from "../../../utils/contexts";
import { UserContextType } from "../../../utils/types";


const Menu = () => {
    const {setUser} =useUserContext() as UserContextType;

    const handleLogOut= () =>{
        setUser(null)
    }

    return (
        <nav className="flex flex-row ">
            <Link href={"/"} className="text-white">Home</Link>
            <Link href={"/products"}>products</Link>
            <Link href={"/profile"}>profile</Link>
            <Link href={"/wishlist"}>wishlist</Link>
            
            <button onClick={handleLogOut}>Log Out</button>
            
        </nav>
    )
}

export default Menu;