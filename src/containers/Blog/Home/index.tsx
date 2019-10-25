import React, { useState, useEffect } from 'react'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
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

  // fetch articles
  useEffect(() => {
    const fetchArticleData = () => {
      fetchArticles({
        page,
        pageSize: 10,
      }).then(({ list = [], total = 0 }) => {
        batchedUpdates(() => {
          setArticles(list)
          setTotal(total)
        })
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
          current={page}
          onChange={setPage}
        />
      </div>
    </div>
  )
}

export default Home
