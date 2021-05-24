import React from "react";
// import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590
  },
  {
    name: "Page B",
    uv: 868
  },
  {
    name: "Page C",
    uv: 1397
  },
  {
    name: "Page D",
    uv: 1480
  },
  {
    name: "Page E",
    uv: 1520
  },
  {
    name: "Page F",
    uv: 1400
  }
];

export default function barChart(props) {
  console.log(props.propsDatas);
  return (
    <ComposedChart
      width={1100}
      height={600}
      data={props.propsDatas}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cnt" barSize={20} fill="#413ea0" />
      {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      <Line type="monotone" dataKey="amt" stroke="#ff7320" /> */}
    </ComposedChart>
  );
}
