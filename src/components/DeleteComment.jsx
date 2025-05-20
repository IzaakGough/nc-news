import { apiBaseString } from "../App"
import { useState } from "react"
import axios from "axios"

function DeleteComment({comment}) {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    function handleDelete() {
        setLoading(true)
        axios.delete(`${apiBaseString}/comments/${comment.comment_id}`)
        .then(response => {
            setLoading(false)
            //console.log(response)

        })
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