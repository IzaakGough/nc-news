import {Routes, Route} from 'react-router-dom'
import './App.css'

import Header from './Header'
import Articles from './components/Articles'
import Article from './components/Article'

export const apiBaseString = "https://northcoders-backend-project-z5pl.onrender.com/api"

function App() {
  
  return (
    <>
    <Header />
      <Routes>
        <Route path="/articles" element={
          <Articles/>
          }/>
          <Route path="/articles/:article_id" element={
            <Article/>
          }/>
      </Routes>
    </>
  )
}

export default App
