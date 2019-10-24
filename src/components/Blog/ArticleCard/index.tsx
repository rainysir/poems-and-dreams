import React from 'react'
import './style.scss'
import Tag from '../Tag'

interface IArticleCardProps {
  title: string;
  description: string;
}

const ArticleCard: React.FC<IArticleCardProps> = props => {
  return (
    <div className="article-card-wrap">
      <div className="header">
        <h1 className="title">{props.title}</h1>
      </div>
      <div className="content">{props.description}</div>
      <div className="footer">
        <div className="tags">
          <Tag color="red">https</Tag>
          <Tag color="blue">CDN</Tag>
          <Tag>教程</Tag>
        </div>
        <div className="read-article-btn">阅读全文 >></div>
      </div>
    </div>
  )
}

export default ArticleCard
