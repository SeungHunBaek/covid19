import React from "react";
import './Chart.css';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";

// X축 tick
const CustomizedAxisTick = (props) => {
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
        tick={<CustomizedAxisTick/>} 
        scale="auto" 
        value="누적 확진자" 
        interval={0}
      />
      <YAxis 
        label={{ value: "명" , offset: 30, angle: 0, position: 'top' }} 
        type="number" 
        ticks={[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400]}
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
