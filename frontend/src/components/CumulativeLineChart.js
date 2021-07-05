import React from "react";
import './Chart.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from "recharts";
// 데이터곡선 라벨
const CustomizedDataLineLabel = (props) => {
  const { x, y, stroke, value } = props;
  const dotValue = numberWithCommas(value);
  return (
    <text 
      x={x+30}
      y={y+20} 
      dy={0} 
      fill={stroke} 
      fontSize={15} 
      textAnchor="middle"
      transform="rotate(0)"
    >
      {dotValue}
    </text>
  );
};
// X축 tick
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
// Y축 tick
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

// tootip 디자인
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="line-tooltip-content">
        <p className="label">{`${label}`}</p>
        <p className="label">{`누적 ${numberWithCommas(payload[0].value)}`}명</p>
      </div>
    );
  }

  return null;
};

// 숫자[,]추가처리
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 마우스 오버했을경우 원형 디자인
const CustomizedActiveDot = () => {
  return {stroke: 'red', strokeWidth: 1, fill:'red', r: 7};
}
// 그래프상 원형 디자인
const CustomizedDot = () => {
  return {stroke: 'red', strokeWidth: 1, fill:'red', r: 9};
}

export default function CumulativeLineChart(props) {
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
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick/>} padding={{ left: 90 }}  interval={0}/>
      <YAxis dataKey="확진자수" domain={['dataMin-1000', 'auto']} tick={<CustomizedYAxisTick/>}  />
      <Tooltip content={<CustomTooltip/>}/>
      <Line type="monotone" dataKey="확진자수" stroke="#8884d8" activeDot={CustomizedActiveDot()}>
        <LabelList content={<CustomizedDataLineLabel/>} />
      </Line>
    </LineChart>
  );
}
