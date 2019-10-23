import React from 'react'
import './Home.scss'
import wallPaper from '../../../assets/wallPaper.jpg'
import SlideBar from '../../../components/Blog/SlideBar'

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="parallax-mirror">
        <img
          className="parallax-slider"
          alt="背景图"
          src={wallPaper}
        />
      </div>
      <SlideBar />
    </div>
  )
}

export default Home
