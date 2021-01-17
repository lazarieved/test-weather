import React from 'react'
import {useSelector} from "react-redux";
import SearchPanel from "./searchPanel";
import ChartBar from "./ChartBar";

function App() {
  const tempList = useSelector(state => state.tempList);
  const errorMessage = useSelector(state => state.error);

  return (
    <div className="App">
      <SearchPanel/>
      {errorMessage ?
        'city is not found' :
        tempList &&
        <ChartBar/>}
    </div>
  );
}

export default App;
