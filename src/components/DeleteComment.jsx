import { useState } from "react"
import { deleteArticleComment, getArticleById, getArticleComments } from "../utils/api"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../contexts/LoggedInUser"

function DeleteComment({comment, setComments, setArticle}) {

    const {loggedInUser, setLoggedInUser} = useContext(LoginContext)

    const {article_id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function handleDelete() {
        setLoading(true)
        
        deleteArticleComment(comment.comment_id)
        .then(() => {
            setLoading(false)
            getArticleComments(article_id)
            .then(comments => {
                setComments(comments)
                getArticleById(article_id)
                .then(article => {
                    setArticle(article)
                })
                .catch(err => {
                    console.log(err)
                })
            })
        })
        .catch(err => {
            setError(true)
        })

    }

    if (loading) return <p>Deleting...</p>
    if (error) return <p>Something went wrong...</p>

    return (
        <>
        {loggedInUser && comment.author === loggedInUser.username && (
            <button 
            onClick={handleDelete}
            disabled={loading}
            >Delete
            </button>
        )}
        </>
    )
}

export default DeleteComment