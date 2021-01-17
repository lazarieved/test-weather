import React from 'react'
import {useSelector} from "react-redux";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'

function ChartBar() {
  const cityName = useSelector(state => state.city);
  const tempList = useSelector(state => state.tempList);
  const dataTemp = tempList && tempList.map(item => {
    const elem = {
      name: item.dt_txt,
      temp: item.main.temp_max,
    };
    return elem
  });

  return (
    <div>
      <span>{cityName}</span>
      <LineChart
        width={1100}
        height={600}
        data={dataTemp}
        margin={{
          top: 50, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    </div>
  )
}

export default ChartBar;
