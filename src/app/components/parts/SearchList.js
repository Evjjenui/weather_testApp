import React from "react";
import  { weatherFetch } from "../../redux/weatherSearch"
import { useDispatch, useSelector } from "react-redux";


export const SearchList = () => {
  const historyList = useSelector(state => state.history.list)
  const dispatch = 
  
  console.log(historyList);
  return (
    <div className='recently-viewved'>
      <p><strong>Recently viewved:</strong></p>

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
  )
}
