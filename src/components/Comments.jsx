import { useParams } from "react-router-dom"
import axios from "axios"
import { apiBaseString } from "../App"
import { useState, useEffect } from "react"
import PostComment from "./PostComment"
import CommentCard from "./CommentCard"
import DeleteComment from "./DeleteComment"

function Comments({article}) {
    const [comments, setComments] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        axios.get(`${apiBaseString}/articles/${article_id}/comments`)
        .then(response => {
            setComments(response.data.comments)
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