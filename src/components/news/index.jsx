import React from 'react'

import './style.css'


function News(props) {

    return (
        <div className="container-news-content">
            {props.data.map((article, index) => (
                <div key={article.title + index}
                className="new-content"
                onClick={() => { props.onClick(index) }}>
                    <img src={article.urlToImage} alt={article.title} />
                    <div className="new-content-text">
                        <h1>
                            {console.log(article.title + index)}
                            {article.title}
                        </h1>
                        <p>
                            {article.description}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default News