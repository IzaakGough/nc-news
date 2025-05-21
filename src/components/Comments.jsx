import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PostComment from "./PostComment"
import CommentCard from "./CommentCard"
import DeleteComment from "./DeleteComment"
import { getArticleComments } from "../utils/api"

function Comments({article}) {
    const [comments, setComments] = useState([])
    const {article_id} = useParams()

    useEffect(() => {

        getArticleComments(article_id)
        .then(comments => {
            setComments(comments)
        })
        .catch(err => console.log(err))

    }, [comments])

    return (
        <>
        <h3>Comments: {article.comment_count}</h3>
        <PostComment
        comments={comments}
        setComments={setComments}
        />
        <ul>
            {comments.map(comment => {
                return <> 
                <CommentCard
                comment={comment} 
                />
                <DeleteComment
                comment={comment}
                />
                </> 
                
            })}
        </ul>
        </>
    )
}

export default Comments