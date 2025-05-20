import axios from "axios"
import { apiBaseString } from "../App"

function ArticleVotes({article, setArticle}) {

    // Use optimistic rendering to handle article votes
    function handleVote(event) {
        let rating = Number(event.target.innerText)
        const parent = event.target.parentElement
        let votes = parent.children[0].children[0].innerText
        
    // Give instant UI feedback for users action
        votes = Number(votes) + rating
        
    // Then make request to api
    axios.patch(`${apiBaseString}/articles/${article.article_id}`, {inc_votes: rating})
    .then(response => {
        console.log(response.data.updatedArticle)
        setArticle(response.data.updatedArticle)
    })
    .catch(err => console.log(err))
    }

    return (
        <>
        <h3 className="votes">Votes: <span>{article.votes}</span></h3>
        <button className="back-button" onClick={handleVote}>+1</button>
        <button className="back-button" onClick={handleVote}>-1</button>
        </>
    )
}

export default ArticleVotes