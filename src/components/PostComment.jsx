import { useParams } from "react-router-dom"
import axios from "axios"
import { apiBaseString } from "../App"
import { useState, useEffect } from "react"

function PostComment({comments, setComments}) {
    const [comment, setComment] = useState("")
    const {article_id} = useParams()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    function handleChange(event) {
        setComment(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)
            // Comments hardcoded to be posted as user grumpy19 for now
            axios.post(`${apiBaseString}/articles/${article_id}/comments`, {
                username: "grumpy19",
                body: comment
            })
            .then(response => {
                //console.log(response.data.postedComment)
                setComment("")
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    }
        return (
            <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="body">
                    <textarea 
                    value={comment}
                    name="body" id="body" 
                    placeholder="Add a comment..."
                    onChange={handleChange}
                    disabled={loading}
                    ></textarea>
                </label>
                <input 
                type="submit"
                value={loading? "Posting...": "Comment"}
                disabled={loading} />
            </form>
            </>
        )

}

export default PostComment