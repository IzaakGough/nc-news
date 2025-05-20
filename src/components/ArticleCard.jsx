import { Link } from "react-router-dom"

function ArticleCard({article}) {

    return (
        <div>
            <li className="article" key={article.article_id}>       
                <div className="numbers">
                    <h3>Votes: {article.votes}</h3>
                    <h3>Comments: {article.comment_count}</h3>
                </div>
                    <h3>{article.topic}</h3>
                    <h3>{article.author}</h3>
                    <div className="article-title">
                    <h2>{article.title}</h2>
                    </div>

                    <Link to={`/articles/${article.article_id}`}>
                    <button className="read-button">Read</button>
                    </Link>
                        
                    <img src={article.article_img_url} width={200} height={200}></img>
                </li>
                
        </div>
    )
}



export default ArticleCard