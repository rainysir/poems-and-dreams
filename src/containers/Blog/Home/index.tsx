import React, { useState, useEffect } from 'react'
import './style.scss'
import wallPaper from '../../../assets/wallPaper.jpg'
import SlideBar from '../../../components/Blog/SlideBar'
import ArticleCard from '../../../components/Blog/ArticleCard'
import Pagination from '../../../components/Pagination'
import { fetchArticles, IArticlesRes } from '../../../services/blog'

const Home: React.FC = () => {
  const [articles, setArticles] = useState<IArticlesRes[]>([])
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  useEffect(() => {
    const fetchArticleData = () => {
      fetchArticles({
        page,
        pageSize: 10,
      }).then(({ list = [], total = 0 }) => {
        setArticles(articles.concat(list.slice(0, 2)))
        setTotal(total)
      })
    }
    fetchArticleData()
  }, [page])
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
        <Pagination
          total={total}
        />
      </div>
    </div>
  )
}

export default Home
