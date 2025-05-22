import {getArticleById, patchArticle} from "../utils/api"
import { useEffect, useState } from "react"

function ArticleVotes({article, setArticle}) {

    const [error, setError] = useState(false)
    const [votes, setVotes] = useState(article.votes)

    // Use optimistic rendering to handle article votes
    
    useEffect(() => {

    }, [votes])

    function handleVote(e) {
        let rating = Number(e.target.innerText)
        
    // Give instant UI feedback for users action

        setVotes(article.votes + rating)
        
    // Then make request to api

    patchArticle(article.article_id, rating)
    .then(article => {
        getArticleById(article.article_id)
        .then(article => {
            setArticle(article)
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        setError(true)
    })

    }

    if (error) return <p>Something went wrong...</p>

    return (
        <>
        <h3 className="votes">Votes: <span>{votes}</span></h3>
        <button className="back-button" onClick={handleVote}>+1</button>
        <button className="back-button" onClick={handleVote}>-1</button>
        </>
    )
}

export default ArticleVotes