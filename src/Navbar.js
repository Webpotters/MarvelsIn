import { useRef } from "react"
import "./styles/main.css"
import Login from "./login";

function Navbar(){

    const navRef = useRef();
    return(
        <header>
            <h2 className='animate-charcter' href='/#Home'><b>Marvels In</b></h2>
            <nav ref={navRef}>
                <a href="/#Home">Home</a>
                <a href="/#About">About</a>
                <a href="/#Service">Service</a>
                <a href="/#Contact">Contact</a>
                <button href="/#login">Login</button>
                <Login trigger={false}></Login>
                <button href="/#Sign_Up">Sign Up</button>
            </nav>
            
            
        </header>
        
    )
}
export default Navbar;