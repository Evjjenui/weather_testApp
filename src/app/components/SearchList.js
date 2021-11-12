import React from "react";
import  { weatherFetch } from "../redux/weatherSearch"
import { useDispatch, useSelector } from "react-redux";


const SearchList = () => {
  const historyList = useSelector(state => state.history.list)
  const dispatch = useDispatch()
  
  return (
    <div className='recently-viewed'>
      <p>Recently viewed:</p>
      <div className="recently-viewed__list">
        {(historyList.length > 0 ) && historyList.slice(0, 10).map( (item) => {
          return (
            <span
              key={ item.date }
              onClick={() => dispatch(weatherFetch(item.city))}>
              { item.city }
              <br/>
              <i>{ new Date(item.date).toString().split(' ')[4] }</i>
            </span>
          )
        })}
      </div>
    </div>  
  )
}
export default SearchList;
