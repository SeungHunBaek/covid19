import React from "react";
import './Chart.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from "recharts";

const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;
  const dotValue = numberWithCommas(value);
  return (
    <text 
      x={x+20}
      y={y+20} 
      dy={0} 
      fill={stroke} 
      fontSize={12} 
      textAnchor="middle"
      transform="rotate(0)"
    >
      {dotValue}
    </text>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

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
        {payload.value}
      </text>
    </g>
  );
};
const CustomizedYAxisTick = (props) => {
  const { x, y, payload } = props;
  const labelY = numberWithCommas(payload.value);
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={-20}
        dy={20}
        textAnchor="end"
        fill="#666"
        transform="rotate(0)"
      >
        {labelY}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="line-tooltip-content">
        <p className="label">{`${label}`}</p>
        <p className="label">{`${numberWithCommas(payload[0].value)}`}명</p>
      </div>
    );
  }

  return null;
};

// 숫자[,]추가처리
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CustomizedActiveDot = () => {
  return {stroke: 'red', strokeWidth: 1, fill:'red', r: 7};
}
const CustomizedDot = () => {
  return {stroke: 'red', strokeWidth: 1, fill:'red', r: 9};
}

export default function CumulativeLineChart(props) {
    console.log('==')
    console.log(props.propsDatas)
    const datas = props.propsDatas;
  return (
    <LineChart
      width={1200}
      height={500}
      data={datas}
      margin={{
        top: 20,
        right: 80,
        left: 20,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  height={60} tick={<CustomizedAxisTick/>} />
      <YAxis dataKey="확진자수" domain={[142000, 'auto']} tick={<CustomizedYAxisTick/>}  />
      <Tooltip content={<CustomTooltip/>}/>
      <Legend />
      <Line type="monotone" dataKey="확진자수" stroke="#8884d8" activeDot={CustomizedActiveDot()}>
        <LabelList content={<CustomizedLabel/>} />
      </Line>
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  );
}
