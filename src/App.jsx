import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import Header from './Header'
import Articles from './components/Articles'

export const apiBaseString = "https://northcoders-backend-project-z5pl.onrender.com/api"


function App() {
  
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)

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
          />
          }/>
      </Routes>
    </>
  )
}

export default App
