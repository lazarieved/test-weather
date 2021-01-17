import React, {useState} from 'react'
import SearchPanel from "./searchPanel";
import ChartBar from "./ChartBar";

function App() {
  const [isShowChartBar, setIsShowChartBar] = useState(false);

  return (
    <div className="App">
      <SearchPanel/>
      <span>city name</span>
      {isShowChartBar &&
      <ChartBar/>}
    </div>
  );
}

export default App;
