// componet for  the single News:
import React from 'react'

function News(news) {
  return (
    <div className='News'>
        <img src={news.image} alt={news.title} className='news-image'/>
        <h1 className="news-title">{news.title}</h1>
        <p className="news-description">{news.description}</p>
    </div>
  )
}
export default News