import { useParams } from "react-router-dom"
import axios from "axios"
import { apiBaseString } from "../App"
import { useState, useEffect } from "react"
import Comments from "./Comments"
import ArticleDetail from "./ArticleDetail"


function Article() {

    const [article, setArticle] = useState(null)
    const {article_id} = useParams()

        useEffect(() => {
            axios.get(`${apiBaseString}/articles/${article_id}`)
            .then(response => {
                setArticle(response.data.article)
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