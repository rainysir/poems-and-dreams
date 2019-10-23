import React from 'react'
import './Home.scss'
import wallPaper from '../../../assets/wallPaper.jpg'

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="parallax-mirror">
        <img className="parallax-slider" src={wallPaper} />
      </div>
    </div>
  )
}

export default Home
