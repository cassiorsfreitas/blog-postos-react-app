import React, { useState, useEffect } from 'react'

import './style.css';

import News from "../../components/news"

const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=50983daeea314c298f4ab9a183e078c0'

function Home() {

  const [notices, setNotices] = useState([])
  const [article, setArticle] = useState()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const noticesResponse = await fetch(URL)
      const noticesJson = await noticesResponse.json()
      setNotices(noticesJson.articles)
    }
    fetchData()
  }, [])

  function onClick(index) {
    setArticle(notices[index])
    setVisible(true)
  }

  return (
    <div className="container">
      
      <div className="container-menu">
        Potato
      </div>

      <div className="container-news">
        <News data={notices} onClick={onClick} />
        {visible && article && (
          <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <button onClick={() => setVisible(false)}>Close</button>
          </div>
        )}
      </div>
    
    </div>
  )
}

export default Home
