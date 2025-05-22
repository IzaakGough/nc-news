import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PostComment from "./PostComment"
import CommentCard from "./CommentCard"
import DeleteComment from "./DeleteComment"
import { getArticleComments } from "../utils/api"

function Comments({setArticle}) {
    const [comments, setComments] = useState([])
    const {article_id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getArticleComments(article_id)
        .then(comments => {
            setLoading(false)
            setComments(comments)
        })
        .catch(err => {
            setError(true)
        })

    }, [])

    if (error) return <p>Something went wrong...</p>
    
        return (
            <>
            {loading? (
                <p>Loading comments...</p>
            ) : (
            <>
            <PostComment
            setArticle={setArticle}
            setComments={setComments}  
            />
            <ul>
                {comments.map(comment => {
                    return <> 
                    <CommentCard
                    comment={comment} />
                    <DeleteComment
                    setArticle={setArticle}
                    setComments={setComments}
                    comment={comment} />
                    </> 
                    
                })}
            </ul>
            </>
            )}
            </>
            
        )
}

export default Comments