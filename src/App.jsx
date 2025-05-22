import {Routes, Route} from 'react-router-dom'
import './App.css'

import Header from './Header'
import Articles from './components/Articles'
import Article from './components/Article'
import LoginForm from './LoginForm'
import Users from './components/Users'


function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" />
        <Route path="/articles" element={
          <Articles/>
          }/>
          <Route path="/articles/:article_id" element={
            <Article/>
          }/>
          <Route path="/articles/:topic" element={
            <Articles />
          }
          />
          <Route path="/articles/:sort_by/:order" element={
            <Articles />
          }
          />
        <Route path="/users" element={
          <Users />
        }
        />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
