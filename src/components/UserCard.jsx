function UserCard({user}) {

    return (
        <>
        <li>
            <h3>{user.username}</h3>
            <h3>{user.name}</h3>
            <img src={user.avatar_url} width={200} height={200}></img>
        </li>
        </>
    )

}

export default UserCard