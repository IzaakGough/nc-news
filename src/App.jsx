import {Routes, Route} from 'react-router-dom'
import './App.css'

import Header from './Header'
import Articles from './components/Articles'
import Article from './components/Article'

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
          <Route path="/articles/:topic" element={
            <Article />
          }
          />
      </Routes>
    </>
  )
}

export default App
