import React from 'react'
import './style.scss'
import avatar from '../../../assets/avatar.jpg'

const SlideBar: React.FC = () => {
  return (
    <div className="slide-bar-container">
      <div className="top" />
      <div className="nav-wrap">
        <img
          className="avatar"
          alt="头像"
          src={avatar}
        />
        <h1 className="name">Zhangsir</h1>
        <div className="job">Front-end</div>
        <div className="motto">Life is not only about compromise, but also poems and dreams</div>
        <div className="menus">
          <div className="menu-item"></div>
          <div className="menu-item"></div>
          <div className="menu-item"></div>
          <div className="menu-item"></div>
          <div className="menu-item"></div>
        </div>
      </div>
    </div>
  )
}

export default SlideBar
