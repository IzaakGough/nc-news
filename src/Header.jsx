import {Link} from "react-router-dom"
import { useContext } from "react";
import {LoginContext} from "./contexts/LoggedInUser"

function Header() {
    const {loggedInUser} = useContext(LoginContext)

    return (
        <header>
            <nav className="navbar">
                <Link to="/articles">
                Articles
                </Link>

                <Link to="/users">
                Users
                </Link>
                
            </nav>
            <Link id="login" to="/login">
            {loggedInUser ? <h3>Logged in as {loggedInUser.username}</h3> : <h3>Log in</h3>}
            </Link>
        </header>
    )
}

export default Header