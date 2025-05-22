import axios from "axios";

const northCodersNewsApi = axios.create({
    baseURL: "https://northcoders-backend-project-z5pl.onrender.com/api"
})

export const getArticles = () => {
    return northCodersNewsApi.get("/articles")
    .then(res => res.data.articles)
}

export const getArticleById = (article_id) => {
    return northCodersNewsApi.get(`/articles/${article_id}`)
    .then(res => res.data.article)
}

export const getArticlesByTopic = (topic) => {
    return northCodersNewsApi.get(`/articles?topic=${topic}`)
    .then(res => res.data.articles)
}

export const getArticlesByQuery = (query) => {
    return northCodersNewsApi.get(`/articles?${query}`)
    .then(res => res.data.articles)
}

export const getArticleComments = (article_id) => {
    return northCodersNewsApi.get(`/articles/${article_id}/comments`)
    .then(res => res.data.comments)
}


export const postArticleComment = (article_id, username, comment) => {
    return northCodersNewsApi.post(`/articles/${article_id}/comments`, {
        username,
        body: comment
    })
    .then(res => res.data.postedComment)
}

export const patchArticle = (article_id, rating) => {
    return northCodersNewsApi.patch(`/articles/${article_id}`, {
        inc_votes: rating
    })
    .then(res => res.data.updatedArticle)
}

export const deleteArticleComment = (comment_id) => {
    return northCodersNewsApi.delete(`/comments/${comment_id}`)
    .then(res => res)
}


export const getTopics = () => {
    return northCodersNewsApi.get("/topics")
    .then(res => res.data.topics)
}

export const getUsers = () => {
    return northCodersNewsApi.get("/users")
    .then(res => res.data.users)
}

export const getUserByUsername = (username) => {
    return northCodersNewsApi.get(`/users/${username}`)
    .then(res => res.data.user)
}









