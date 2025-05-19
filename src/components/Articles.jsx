
import { useEffect, useState } from "react"
import axios from "axios"
import { apiBaseString } from "../App"


function Articles({articles, setArticles}) {

    useEffect(() => {
        axios.get(`${apiBaseString}/articles`)
        .then(response => {
            console.log(response.data.articles)
            setArticles(response.data.articles)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <ul>
            {articles.map(article => {
                return <li className="article" key={article.article_id}>
                    
                    <div hidden={true}>{article.article_id}</div>
                    <div className="numbers">
                    <h3>Votes: {article.votes}</h3>
                    <h3>Comments: {article.comment_count}</h3>
                    </div>
                    <h3>{article.topic}</h3>
                    <h3>{article.author}</h3>
                    <h2>{article.title}</h2>

                    <button className="read-button">Read</button>
                    <img src={article.article_img_url} width={200} height={200}></img>
                </li>
            })}
        </ul>
        </>
    )

}

export default Articles