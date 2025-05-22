import ArticleVotes from "./ArticleVotes"

function ArticleDetail({article, setArticle}) {
    return (
        <>
        <ArticleVotes
        article={article}
        setArticle={setArticle}
        />
        <h3>Comments: {article.comment_count}</h3>
        <div className="read-article">
        <div>{article.body}</div>
        <div className="article-title">
        <h2>{article.title}</h2>
        </div>
        <img src={article.article_img_url} width={200} height={200}></img>
        <div className="article-info">
        <h3>{article.author}</h3>
        <h3>{article.topic}</h3>
        </div>
        </div>
        </>
    )

}

export default ArticleDetail