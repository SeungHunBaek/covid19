import React from "react";
import './Chart.css';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import _ from 'lodash';

// X축 tick
const CustomizedXAxisTick = (props) => {
  const { x, y, payload } = props;
  const date = payload.value+'';
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={30}
        y={0}
        dy={20}
        textAnchor="end"
        fill="#666"
        transform="rotate(0)"
      >
        {date.substring(0, 10)}
      </text>
    </g>
  );
};

export default function barChart(props) {
  const data = [...props.propsDatas].reverse();
  
  // Y축 tick
  const CustomizedYAxisTick = () => {
    const max = _.maxBy(data, function(obj) { return obj.incDec; });
    const min = _.minBy(data, function(obj) { return obj.incDec; });
    if(!max) return;
    const tickMax = (Math.ceil(max.incDec / 100) * 100) + 100;
    const tickMin = (Math.ceil(min.incDec / 100) * 100) - 100;
    let tick =[];
    if(tickMin > 500 && (tickMax - tickMin) > 300) {
      tick =  [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];
    } else {
      tick =  [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600];
    }
    return tick;
  };

  return (
    <ComposedChart
      width={1150}
      height={600}
      data={data}
      margin={{
        top: 50,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis 
        dataKey="createDt" 
        tick={<CustomizedXAxisTick/>} 
        scale="auto" 
        value="누적 확진자" 
        interval={0}
      />
      <YAxis 
        label={{ value: "명" , offset: 10, angle: 0, position: 'top' }} 
        type="number" 
        ticks={CustomizedYAxisTick()}
        domain={[0, 'dataMax']} />
      <Tooltip  
        formatter={(value) => new Intl.NumberFormat('en').format(value)
      }/>
      <Bar 
        dataKey="incDec" 
        barSize={50} 
        fill="#FA5858" 
        unit="명"
      />
    </ComposedChart>
  );
}
