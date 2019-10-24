import React, { useReducer, useCallback } from 'react'
import './style.scss'

interface IPagination {
  total: number;
  pageSize?: number;
}

interface IPaginationBtnItem {
  onClick: (payload: any) => void;
  disPatchkey: number | string;
  count?: number;
  isCurrent?: boolean
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

const PaginationBtnItem: React.FC<IPaginationBtnItem> = props => {
  let className = 'item'
  const isNumberBtn = props.disPatchkey !== 'next' && props.disPatchkey !== 'prev'
  if (!isNumberBtn) {
    className = String(props.disPatchkey)
  }
  if (props.isCurrent) {
    className += ' current'
  }
  const handleClick = useCallback(() => {
    if (isNumberBtn) {
      return props.onClick({ type: 'set', payload: { count: props.count }})
    }
    props.onClick({ type: props.disPatchkey })
  }, [])
  return (
    <div className={className} onClick={handleClick}>{props.children}</div>
  )
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
        <PaginationBtnItem
          disPatchkey="prev"
          onClick={dispatch}
        >
          « Prev
        </PaginationBtnItem>
      ) : null}
      {
        [...Array(pageCount)].map((_, index) => {
          const showCount = index + 1
          const isCurrent = showCount === state.currentPage
          return (
            <PaginationBtnItem
              disPatchkey={showCount}
              onClick={dispatch}
              key={index}
              count={showCount}
              isCurrent={isCurrent}
            >
              {showCount}
            </PaginationBtnItem>
          )
        })
      }
      {showNext ? (
        <PaginationBtnItem
          disPatchkey="next"
          onClick={dispatch}
        >
          Next »
        </PaginationBtnItem>
      ) : null}
    </div>
  )
}

Pagination.defaultProps = {
  total: 0,
  pageSize: 10,
}

PaginationBtnItem.defaultProps  = {
  onClick: () => {},
}

export default Pagination
