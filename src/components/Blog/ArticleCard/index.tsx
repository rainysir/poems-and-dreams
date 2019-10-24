import React from 'react'
import './style.scss'
import Tag from '../Tag'

const ArticleCard: React.FC = () => {
  return (
    <div className="article-card-wrap">
      <div className="header">
        <h1 className="title">Test</h1>
      </div>
      <div className="content">这里是内容</div>
      <div className="footer">
        <div className="tags">
          <Tag>https</Tag>
          <Tag>CDN</Tag>
          <Tag>教程</Tag>
        </div>
        <div className="read-article-btn">阅读全文 >></div>
      </div>
    </div>
  )
}

export default ArticleCard
