import React, { useState, useEffect } from 'react'

import './style.css';

import News from "../../components/news"
import LeftMenu from '../../components/menus/left'

const categories = {
  init: {
    name: "All",
    tag: "all",
    url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=50983daeea314c298f4ab9a183e078c0',
  },
  list: [
    {
      id: 1,
      name: "Apple",
      tag: "apple",
      url: 'https://newsapi.org/v2/everything?q=Apple&from=2021-04-11&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
    },
    {
      id: 2,
      name: "Google",
      tag: "google",
      url: 'https://newsapi.org/v2/everything?q=Google&from=2021-04-11&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
    }
  ]
}

function Home() {

  const [notices, setNotices] = useState([])
  const [list, setList] = useState([categories.list])

  useEffect(() => {
    async function fetchData() {
      const noticesResponse = await fetch(categories.init.url)
      const noticesJson = await noticesResponse.json()
      setNotices(noticesJson.articles)
    }
    fetchData()
  }, [])

  function handleVisible(id) {
    const newList = categories.list.map(company => {
      return company.id === id ? {...company, visible: !company.visible} : company
    })
    
    setList(newList)
  }

  return (
    <div className="container">
      {console.log(list)}
      <LeftMenu onClick={handleVisible} categories={categories} />
      <div className="container-news">
        <News data={notices} />
      </div>
    </div>
  )
}

export default Home
