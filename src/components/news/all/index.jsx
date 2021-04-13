import React from 'react'

import './style.css'


function All(props) {

    return (
        <div className="container-news-content">
            {props.data.map((article, index) => (
                <div key={article.title + index}
                    className="new-content"
                    onClick={() => window.open(article.url, "_blank")}>
                    <img src={article.urlToImage} alt={article.title} />
                    <div className="new-content-text">
                        <h1>
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

export default All