import React from 'react'
import './style.scss'
import wallPaper from '../../../assets/wallPaper.jpg'
import SlideBar from '../../../components/Blog/SlideBar'
import ArticleCard from '../../../components/Blog/ArticleCard'

const Home: React.FC = () => {
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
        <ArticleCard />
      </div>
    </div>
  )
}

export default Home
