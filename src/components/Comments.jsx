import { useParams } from "react-router-dom"
import axios from "axios"
import { apiBaseString } from "../App"
import { useState, useEffect } from "react"

function Comments() {
    const [comments, setComments] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        axios.get(`${apiBaseString}/articles/${article_id}/comments`)
        .then(response => {
            setComments(response.data.comments)
        })
        .catch(err => console.log(err))

    }, [])

    return (
        <>
        <h3>Comments: {comments.length}</h3>
        <ul>
            {comments.map(comment => {
                return <li>
                    <h3>{comment.author}</h3>
                    <h3>{comment.votes}</h3>
                    <h3>{comment.body}</h3>
                </li>
            })}
        </ul>
        </>
    )
}

export default Comments