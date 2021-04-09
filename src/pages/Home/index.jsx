import React, { useState, useEffect } from 'react'
import './style.css';

function Home() {

  const [posts, setPosts] = useState([])

  useEffect ( () => {
    async function fetchData() {
      const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
      const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
  
      const [posts, photos] = await Promise.all([postsResponse, photosResponse])
  
      const postsJson = await posts.json()
      const photosJson = await photos.json()
  
      const postsAndPhotos = postsJson.map((posts, index) => {
        return {...posts, cover: photosJson[index].url}
      })
      setPosts(postsAndPhotos)
    }
    fetchData()
    }, [])

  return (
    <div className="App">
      {console.log(posts)}
      Potato!
    </div>
  );
}

export default Home;
