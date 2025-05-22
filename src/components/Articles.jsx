import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import Topics from "./Topics"
import { getArticlesByQuery } from "../utils/api"
import Sort from "./Sort"
import Pagination from "./Pagination"

function Articles() {
    const [articles, setArticles] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.toString()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getArticlesByQuery(query)
        .then(articles => {
            setArticles(articles)
            setLoading(false)
        })
        .catch(err => {
            setError(true)
        })
    }, [query])
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong...</p>

    return (
        <>
        <Topics/>
        <Sort/>
        <Pagination />
        <ul>
        {articles.map(article => {
        return <ArticleCard article={article}/> 
        })}
        </ul>
        </>
    )

}

export default Articles