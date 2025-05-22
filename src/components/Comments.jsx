import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PostComment from "./PostComment"
import CommentCard from "./CommentCard"
import DeleteComment from "./DeleteComment"
import { getArticleCommentsByQuery } from "../utils/api"
import Pagination from "./Pagination"
import { useSearchParams } from "react-router-dom"

function Comments({setArticle}) {
    const [comments, setComments] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.toString()
    const {article_id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getArticleCommentsByQuery(article_id, query)
        .then(comments => {
            setLoading(false)
            setComments(comments)
        })
        .catch(err => {
            setError(true)
        })

    }, [query])

    if (error) return <p>Something went wrong...</p>
    
        return (
            <>
            {loading? (
                <p>Loading comments...</p>
            ) : (
            <>
            <Pagination />
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