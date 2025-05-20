import { useEffect, useState } from "react"
import axios from "axios"
import { apiBaseString } from "../App"
import ArticleCard from "./ArticleCard"

function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get(`${apiBaseString}/articles`)
        .then(response => {
            setArticles(response.data.articles)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <ul>
        {articles.map(article => {
        return <ArticleCard
        article={article}
        /> 
        })}
        </ul>
        </>
    )

}

export default Articles