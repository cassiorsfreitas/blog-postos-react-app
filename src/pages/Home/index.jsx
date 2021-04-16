import React, { useState } from 'react'

import './style.css';

import News from "../../components/news/all"
import LeftMenu from '../../components/menus/left'
import loadNotices from '../../utils/loadNotices'

import loadCompanies from '../../utils/loadCompanies'


function Home() {

  const initCompanies = loadCompanies().list
  const initNotices = loadNotices()
  
  const [list, setList] = useState(initCompanies)
  
  let notices = []
  
  function handleNotices() {
    const filteredId = list.map(obj => {
      return obj.visible && obj.id
    })

    filteredId.every(v => v === false) ? notices = initNotices[0] : loadNewsNotices()

    function loadNewsNotices() {
      filteredId.map(visible => {
        return visible && initNotices[visible].map(article => {
          return notices.push(article)
        })
      })
    }
  }

  handleNotices()
  
  function handleVisible(id) {
    const newList = list.map(company => {
      return company.id === id ? { ...company, visible: !company.visible } : company
    })
    
    setList(newList)
  }

  return (
    <div className="container">
      <LeftMenu onClick={handleVisible} list={list} />
      <div className="container-news">
        <News data={notices} />
      </div>
    </div>
  )
}

export default Home
