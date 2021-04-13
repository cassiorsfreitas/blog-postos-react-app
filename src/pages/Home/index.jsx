import React, { useState } from 'react'

import './style.css';

import News from "../../components/news/all"
import LeftMenu from '../../components/menus/left'
import LoadNotices from  '../../components/loader/LoadNotices'

import loadCompanies from '../../utils/loadCompanies'


function Home() {

  const initCompanies = loadCompanies().list
  const notices = LoadNotices()

  // const [notices, setNotices] = useState([])
  const [list, setList] = useState(initCompanies)

   function handleVisible(id) {
    const newList = list.map(company => {
      console.log(id)
      console.log(company.id)
      return company.id === id ? {...company, visible: !company.visible} : company
    })
    
    setList(newList)
  }

  return (
    <div className="container">
      {console.log(list)}
      <LeftMenu onClick={handleVisible} list={list} />
      <div className="container-news">
        <News data={notices} />
      </div>
    </div>
  )
}

export default Home
