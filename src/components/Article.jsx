import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Comments from "./Comments"
import ArticleDetail from "./ArticleDetail"
import { getArticleById } from "../utils/api"

function Article() {

    const [article, setArticle] = useState(null)
    const {article_id} = useParams()

        useEffect(() => {

            getArticleById(article_id)
            .then(article => {
                setArticle(article)
            })
            .catch(err => console.log(err))

        }, [article_id])

    if (!article) return <p>Loading...</p>

    return (
        <>
        <ArticleDetail
        article={article}
        setArticle={setArticle}
        />
        <Comments
        article={article}
        />
        </>
    )

}

export default Article