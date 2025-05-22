import { createContext, useState } from "react";

export const LoginContext = createContext(null)

export const LoginProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(null)

    return (
        <LoginContext.Provider
        value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
        {children}
        </LoginContext.Provider>
    )
}