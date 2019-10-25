import React, {
  useReducer, useCallback, useEffect,
  useRef,
  useMemo,
} from 'react'
import './style.scss'

interface IPagination {
  total: number;
  pageSize?: number;
  current: number;
  onChange: (page: number) => void
}

interface IPaginationBtnItem {
  onClick: (payload: any) => void;
  disPatchkey: number | string;
  count?: number;
  isCurrent?: boolean;
  show?: boolean;
  isNumberBtn?: boolean;
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

const PaginationBtnItem: React.FC<IPaginationBtnItem> = ({
  isCurrent,
  isNumberBtn,
  show,
  disPatchkey,
  count,
  onClick,
  children,
}) => {
  const className = useMemo(() => {
    let className = 'item'
    if (!isNumberBtn) {
      className = String(disPatchkey)
      className += show ? '' : ' hidden'
    }
    if (isCurrent) {
      className += ' current'
    }
    return className
  }, [disPatchkey, show, isNumberBtn, isCurrent])

  const handleClick = useCallback(() => {
    if (isNumberBtn) {
      return onClick({ type: 'set', payload: { count }})
    }
    onClick({ type: disPatchkey })
  }, [count, disPatchkey, isNumberBtn, onClick])
  return (
    <div className={className} onClick={handleClick}>{children}</div>
  )
}
const Pagination: React.FC<IPagination> = React.memo(({
  pageSize,
  total,
  onChange,
}) => {
  const firstUpdate = useRef(true)
  const [state, dispatch] = useReducer(reducer, initialState)
  const pageCount = Math.ceil(total / (pageSize || 10))
  const showPrev = state.currentPage !== 1
  const showNext = state.currentPage !== pageCount
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    onChange(state.currentPage)
  }, [state.currentPage, onChange])
  return (
    <div className="pagination-wrap">
      <PaginationBtnItem
        disPatchkey="prev"
        onClick={dispatch}
        show={showPrev}
      >
        « Prev
      </PaginationBtnItem>
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
              isNumberBtn={true}
              isCurrent={isCurrent}
            >
              {showCount}
            </PaginationBtnItem>
          )
        })
      }
      <PaginationBtnItem
        disPatchkey="next"
        onClick={dispatch}
        show={showNext}
      >
        Next »
      </PaginationBtnItem>
    </div>
  )
})

Pagination.defaultProps = {
  total: 0,
  pageSize: 10,
  onChange: () => {},
}

PaginationBtnItem.defaultProps  = {
  onClick: () => {},
}

export default Pagination
