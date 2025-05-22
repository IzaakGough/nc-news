import { useState } from "react"
import { getArticles } from "../utils/api"
import { useEffect } from "react"
import ArticleDetail from "./ArticleDetail"
import Comments from "./Comments"

function Home() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [article, setArticle] = useState({})

    useEffect(() => {
        setLoading(true)
        getArticles()
        .then(articles => {
            console.log(articles)
            setArticle(articles[0])
        })
        .catch(err => {
            console.log(err)
        })
        .finally(setLoading(false))
    }, [])
        

    

    return (
        <>
        <h1>A Northern Coders News</h1>
        </>
    )
    

}

export default Home