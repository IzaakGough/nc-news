import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import Topics from "./Topics"
import { getArticles, getArticlesByTopic} from "../utils/api"

function Articles() {
    const [articles, setArticles] = useState([])
    const [searchParams] = useSearchParams()
    const topic = searchParams.get("topic")

    useEffect(() => {

        if (topic) {

            getArticlesByTopic(topic)
            .then(articles => {
                setArticles(articles)
            })
            .catch(err => console.log(err))

        } else {

            getArticles()
            .then(articles => {
                setArticles(articles)
            })
            .catch(err => console.log(err))

        }
    }, [topic])
    
    
    return (
        <>
        <Topics
        setArticles={setArticles}
        />
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