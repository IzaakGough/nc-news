
import { useEffect, useState } from "react"
import axios from "axios"
import { apiBaseString } from "../App"


function Articles({articles, setArticles, article, setArticle}) {

    useEffect(() => {
        axios.get(`${apiBaseString}/articles`)
        .then(response => {
            console.log(response.data.articles)
            setArticles(response.data.articles)
        })
        .catch(err => console.log(err))
    }, [])

    function handleRead(event) {
        const parent = event.target.parentElement
        const article_id = Number(parent.querySelector(".article_id").innerText)
        axios.get(`${apiBaseString}/articles/${article_id}`)
        .then(response => {
            console.log(response.data.article)
            setArticle(response.data.article)
        })
        .catch(err => console.log(err))
    }

    function handleBack() {
        setArticle(null)
    }

    // Use optimistic rendering
    function handleVote(event) {
        const parent = event.target.parentElement
        const article_id = Number(parent.querySelector(".article_id").innerText)
    }

    return (
        <div>
            {article ? (
                <>
                <div>
                <button className="back-button" onClick={handleVote}>+1</button>
                <button className="back-button" onClick={handleVote}>-1</button>
                <div className="article_id" hidden={true}>{article.article_id}</div>
                <div className="read-article">
                <div className="numbers">
                </div>
                <div>{article.body}</div>
                <div className="article-title">
                <h2>{article.title}</h2>
                </div>
                <img src={article.article_img_url} width={200} height={200}></img>
                <div className="article-info">
                <h3>{article.author}</h3>
                <h3>{article.topic}</h3>
                <h3>Comments: {article.comment_count}</h3>
                <h3>Votes: {article.votes}</h3>
                </div>
                </div>
                <button className="back-button" onClick={handleBack}>Back</button>
                </div>
                </>
            ) : (

                <ul>
                {articles.map(article => {
                    return <li className="article" key={article.article_id}>
                        
                        <div className="article_id" hidden={true}>{article.article_id}</div>
                        <div className="numbers">
                        <h3>Votes: {article.votes}</h3>
                        <h3>Comments: {article.comment_count}</h3>
                        </div>
                        <h3>{article.topic}</h3>
                        <h3>{article.author}</h3>
                        <div className="article-title">
                        <h2>{article.title}</h2>
                        </div>
    
                        <button className="read-button" onClick={handleRead}>Read</button>
                        <img src={article.article_img_url} width={200} height={200}></img>
                    </li>
                })}
            </ul>
            )
        }
        </div>
    )

}

export default Articles