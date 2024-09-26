import Link from "next/link"


const Menu = () => {
    return (
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/profile"}>Home</Link>
            <Link href={"/wishlist"}>Home</Link>
        </nav>
    )
}

export default Menu;