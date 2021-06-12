import React from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
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

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CumulativeLineChart(props) {
    console.log('==')
    console.log(props.propsDatas)
    const datas = props.propsDatas;
  return (
    <LineChart
      width={1000}
      height={500}
      data={datas}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  height={60} tick={<CustomizedAxisTick />} />
      <YAxis dataKey="확진자수" domain={[150000, 'auto']} tick={<CustomizedYAxisTick />}  />
      <Tooltip content={<CustomTooltip />}/>
      <Legend />
      <Line type="monotone" dataKey="확진자수" stroke="#8884d8">
        <LabelList content={<CustomizedLabel />} />
      </Line>
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  );
}
