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
      visible: false
    },
    {
      id: 2,
      name: "Google",
      tag: "google",
      url: 'https://newsapi.org/v2/everything?q=Google&from=2021-04-11&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
      visible: false
    },
    {
      id: 3,
      name: "Potato",
      tag: "potato",
      url: 'https://newsapi.org/v2/everything?q=Google&from=2021-04-11&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
      visible: false
    }
  ]
}

function Home() {

  const initList = categories.list

  const [notices, setNotices] = useState([])
  const [list, setList] = useState(initList)

  useEffect(() => {
    async function fetchData() {
      const noticesResponse = await fetch(categories.init.url)
      const noticesJson = await noticesResponse.json()
      setNotices(noticesJson.articles)
    }
    fetchData()
  }, [])

  function handleVisible(id) {
    const newList = list.map(company => {
      console.log(id);
      console.log(company.id)
      console.log(company.name)

      return company.id === id ? {...company, visible: !company.visible} : company
    })
    
    setList(newList)
  }

  return (
    <div className="container">
      {console.log(notices)}
      {console.log(list)}
      <LeftMenu onClick={handleVisible} categories={categories} />
      <div className="container-news">
        <News data={notices} />
      </div>
    </div>
  )
}

export default Home
