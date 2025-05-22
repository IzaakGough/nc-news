import { useContext } from "react";
import { LoginContext } from "./contexts/LoggedInUser";
import { getUserByUsername } from "./utils/api";

const ToggleUser = () => {
    const {loggedInUser, setLoggedInUser} = useContext(LoginContext);

    const toggleUser = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const userData = Object.fromEntries(formData.entries())
        const {username} = userData

        getUserByUsername(username)
        .then(user => {
            setLoggedInUser(user)

        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <form onSubmit={toggleUser}>
            <label htmlFor="username">
                <input type="text" id="username" name="username"></input>
            </label>
            <input type="submit" value="Login"></input>
        </form>
        </>
    )
}

export default ToggleUser;