import React from 'react'
import './style.scss'

const ArticleTag: React.FC = props => {
  return (
    <div className="article-tag-wrap">
      <div className="tag">
        <div className="before" />
        <div className="after" />
        {props.children}
      </div>
    </div>
  )
}

export default ArticleTag
