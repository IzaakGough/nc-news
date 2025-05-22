import { useParams } from "react-router-dom"
import { useState} from "react"
import { getArticleById, getArticleComments, postArticleComment } from "../utils/api"
import { useContext } from "react"
import { LoginContext } from "../contexts/LoggedInUser"



function PostComment({setComments, setArticle}) {

    const {loggedInUser, setLoggedInUser} = useContext(LoginContext)

    const [comment, setComment] = useState("")
    const {article_id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    function handleChange(e) {
        setComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        setLoading(true)

            postArticleComment(article_id, loggedInUser.username, comment)
            .then(() => {
                getArticleComments(article_id)
                .then(comments => {
                    setComments(comments)
                    setComment("")
                    setLoading(false)
                    getArticleById(article_id)
                    .then(article => {
                        setArticle(article)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                })
                .catch(err => {
                    console.log(err)
                })
            })
            .catch(err => {
                setError(true)
            })
    }

        return (
            <>
            {loggedInUser ? (
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

            ) : 
            (
                <p>Please login to post a comment...</p>
            )
        }
            </>
        )
}

export default PostComment