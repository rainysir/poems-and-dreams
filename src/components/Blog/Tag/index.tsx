import React from 'react'
import './style.scss'

interface ITagProps {
  color?: string;
}
interface ITagBackgroundStyle {
  background?: string;
}

interface ITagBeforeStyle {
  borderRightColor?: string;
}

const ArticleTag: React.FC<ITagProps> = props => {
  const tagBackgroundStyle: ITagBackgroundStyle = {}
  const tagBeforeStyle: ITagBeforeStyle = {}
  if (props.color) {
    tagBackgroundStyle.background = props.color
    tagBeforeStyle.borderRightColor = props.color
  }
  return (
    <div className="article-tag-wrap">
      <div className="tag" style={tagBackgroundStyle}>
        <div className="before" style={tagBeforeStyle} />
        {props.children}
      </div>
    </div>
  )
}

export default ArticleTag
