import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/action";


function SearchPanel() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  function getCityWeather(city) {
    fetchWeather(city)(dispatch)
  }

  return (
    <>
      <input onChange={e => setInputValue(e.target.value)}/>
      <button onClick={() => getCityWeather(inputValue)}>Submit</button>
    </>
  )
}

export default SearchPanel;
