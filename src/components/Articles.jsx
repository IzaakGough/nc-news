import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import Topics from "./Topics"
import { getArticles, getArticlesByTopic} from "../utils/api"
import Sort from "./Sort"
import axios from "axios"


function Articles() {
    const [articles, setArticles] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.toString()
    const baseURL = "https://northcoders-backend-project-z5pl.onrender.com/api"
    
    useEffect(() => {
        axios.get(`${baseURL}/articles?${query}`)
        .then(response => {
            console.log(response.data.articles)
            setArticles(response.data.articles)
        })
        .catch(err => console.log(err))
    }, [query])
    
    
    return (
        <>
        <Topics/>
        <Sort/> 
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