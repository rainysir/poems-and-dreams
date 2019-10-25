import React, {
  useReducer, useCallback, useEffect,
  useRef,
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
    className += props.show ? '' : ' hidden'
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
    // props.onChange is not changing, so ignore this paragraph error
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentPage]) //
  console.log('render pagination')
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
