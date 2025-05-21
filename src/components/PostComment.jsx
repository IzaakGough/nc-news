import { useParams } from "react-router-dom"
import { useState} from "react"
import { postArticleComment } from "../utils/api"

function PostComment() {
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

            postArticleComment(article_id, "grumpy19", comment)
            .then(() => {
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