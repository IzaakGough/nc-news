import { useState } from "react"
import { deleteArticleComment } from "../utils/api"

function DeleteComment({comment}) {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function handleDelete() {
        setLoading(true)
        
        deleteArticleComment(comment.comment_id)
        .then(() => setLoading(false))
        .catch(err => {
            setError(true)
            console.log(err)
        })

    }

    if (loading) return <p>Deleting...</p>
    if (error) return <p>Something went wrong...</p>

    // Hard coded so that only comments posted by grumpy19 are able to be deleted
    return (
        <>
        {comment.author === "grumpy19" && (
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