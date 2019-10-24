import React, { useReducer } from 'react'
import './style.scss'

interface IPagination {
  total: number;
  pageSize?: number;
}

interface IPaginationState {
  currentPage: number;
}

const initialState: IPaginationState = {
  currentPage: 1,
}

function reducer(
  state: IPaginationState,
  action: {
    type: string,
    payload?: any,
  },
) {
  switch (action.type) {
    case 'set':
      return {currentPage: action.payload.count}
    case 'next':
      return {currentPage: state.currentPage + 1}
    case 'prev':
      return {currentPage: state.currentPage - 1}
    default:
      throw new Error();
  }
}

const Pagination: React.FC<IPagination> = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const pageSize = props.pageSize || 10
  const pageCount = Math.ceil(props.total / pageSize)
  const showPrev = state.currentPage !== 1
  const showNext = state.currentPage !== pageCount
  return (
    <div className="pagination-wrap">
      {showPrev ? (
        <div className="prev" onClick={() => dispatch({ type: 'prev' })}>« Prev</div>
      ) : null}
      {
        [...Array(pageCount)].map((_, index) => {
          const showCount = index + 1
          const isCurrent = showCount === state.currentPage
          let className = 'item'
          if (isCurrent) {
            className += ' current'
          }
          return (
            <div
              className={className}
              key={index}
              onClick={() => dispatch({ type: 'set', payload: { count: showCount } })}
            >
              {index + 1}
            </div>
          )
        })
      }
      {showNext ? (
        <div className="next" onClick={() => dispatch({ type: 'next' })}>Next »</div>
      ) : null}
    </div>
  )
}

Pagination.defaultProps = {
  total: 0,
  pageSize: 10,
}

export default Pagination
