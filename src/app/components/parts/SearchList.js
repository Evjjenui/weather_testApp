import React from "react";
import  { weatherFetch } from "../../redux/weatherSearch"
import { useDispatch, useSelector } from "react-redux";


export const SearchList = () => {
  const historyList = useSelector(state => state.history.list)
  const dispatch = useDispatch()
  
  return (
    <div className='recently-viewed'>
      <p><strong>Recently viewed:</strong></p>
      <div className="recently-viewed__list">
        {(historyList.length > 0 ) && historyList.map( (item) => {
          return (
            <span
              key={ item.id }
              onClick={() => dispatch(weatherFetch(item.cityName))}>
              { item.cityName }
            </span>
          )
        })}
      </div>
    </div>  
  )
}
