import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import { getUsers } from "../utils/api";

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {

        getUsers()
        .then(users => {
            setUsers(users)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsError(true)
        })
    }, [])

    if (isLoading) return <p>Loading users...</p>
    if (isError) return <p>Something has gone wrong...</p>

    return (
        <>
        <ul>
            {users.map(user => {
                return <UserCard user={user} />
            })}
        </ul>
        </>
    )

}

export default Users