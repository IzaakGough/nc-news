import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Comments from "./Comments"
import ArticleDetail from "./ArticleDetail"
import { getArticleById } from "../utils/api"

function Article() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [article, setArticle] = useState(null)
    const {article_id} = useParams()

        useEffect(() => {
            setLoading(true)
            getArticleById(article_id)
            .then(article => {
                setArticle(article)
                setLoading(false)
            })
            .catch(err => {
                setError(true)
            })

        },[])

    if (!article) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>

    return (
        <>
        <ArticleDetail
        article={article}
        setArticle={setArticle}
        />
        <Comments setArticle={setArticle} />
        </>
    )

}

export default Article