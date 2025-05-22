import { useContext, useState } from "react";
import { LoginContext } from "./contexts/LoggedInUser";
import { getUserByUsername } from "./utils/api";

function LoginForm() {
    const [usernameInput, setUsernameInput] = useState("")
    const {loggedInUser, setLoggedInUser} = useContext(LoginContext)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    function handleTryAgain() {
        setIsError(false)
    }

    function handleInput(e) {
        setUsernameInput(e.target.value)
    }

    function handleSubmit(e) {
        setIsLoading(true)
        e.preventDefault()

        if (usernameInput) {

            getUserByUsername(usernameInput)
            .then(user => {
                setLoggedInUser(user)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.status)
                setIsError(true)
            })
            .finally(setIsLoading(false))
        }
    }
    
    if (isLoading) return <p>Loading...</p>
    
    function handleLogout() {
        setLoggedInUser(null)
    }

    return (
        <div>
            {isError ? (
                <>
                <p>Username not found...</p>
                <button onClick={handleTryAgain}>Try again</button>
                </>
            ) : (

                !loggedInUser ? (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h3>Enter your username below to log in to your account</h3>
                    <input
                    type = "text"
                    name = "username-input"
                    onChange={(e) => handleInput(e)} 
                    placeholder="Your username goes here..."
                    />
                    <input type="submit" id="login-input"></input>
                </form>

            ) : (
                <div className="user-card" id="bio">
                    <img src={loggedInUser.avatar_url}></img>
                    <p className="user-info"> Hello {loggedInUser.username}</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            )

            )}
        </div>
    )
}

export default LoginForm