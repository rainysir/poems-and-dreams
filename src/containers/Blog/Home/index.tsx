import React, { useState, useEffect } from 'react'
import './style.scss'
import wallPaper from '../../../assets/wallPaper.jpg'
import SlideBar from '../../../components/Blog/SlideBar'
import ArticleCard from '../../../components/Blog/ArticleCard'
import { fetchArticles, IArticlesRes } from '../../../services/blog'

const Home: React.FC = () => {
  const [articles, setArticles] = useState<IArticlesRes[]>([])
  useEffect(() => {
    const fetchArticleData = () => {
      fetchArticles({
        page: 1,
        pageSize: 10,
      }).then(({ list, total }) => {
        setArticles(articles.concat(list))
      })
    }
    fetchArticleData()
  }, [])
  return (
    <div className="blog-container">
      <div className="parallax-mirror">
        <img
          className="parallax-slider"
          alt="背景图"
          src={wallPaper}
        />
      </div>
      <SlideBar />
      <div className="content">
        {articles.map((item, index) => (
          <ArticleCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
