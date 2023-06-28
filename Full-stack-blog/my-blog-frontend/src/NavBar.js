import { NavLink } from "react-router-dom";
import {getAuth, signOut} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";


const NavBar=()=>{
    const navigate=useNavigate();
    const {user} =useUser();
    return(
        <nav>
            <h1 className="title">The Compiler's Pen</h1>
            <ul>
            
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/articles">Articles</NavLink>
                </li>
            </ul>
            <div className="nav-right">
                {user 
                   ? <button style={{ backgroundColor: 'red' }} onClick={()=>{
                    signOut(getAuth());
                   }}>Log Out</button>
                   : <button style={{ backgroundColor: 'green' }}  onClick={() => {
                    navigate('/login')
                   }}>Log In</button>}
            </div>
        </nav>
    );
}

export default NavBar;