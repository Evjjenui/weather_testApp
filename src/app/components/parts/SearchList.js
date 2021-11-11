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
        <ol>
          {(historyList.length > 0 ) && historyList.slice(0, 10).map( (item) => {
            return (
              <li>
                <span
                  key={ item.id }
                  onClick={() => dispatch(weatherFetch(item.cityName))}>
                  { item.cityName }
                  <br/>
                  <i>{ item.date }</i>
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </div>  
  )
}
