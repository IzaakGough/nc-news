import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import Header from './Header'
import Articles from './components/Articles'

export const apiBaseString = "https://northcoders-backend-project-z5pl.onrender.com/api"


function App() {
  
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [comments, setComments] = useState([])

  return (
    <>
    <Header />
      <Routes>
        <Route path="/articles" element={
          <Articles
          articles={articles}
          setArticles={setArticles}
          article={article}
          setArticle={setArticle} 
          comments={comments}
          setComments={setComments}
          />
          }/>
      </Routes>
    </>
  )
}

export default App
