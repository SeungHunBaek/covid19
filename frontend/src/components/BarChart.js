import React from "react";
// import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function barChart(props) {
  // console.log(props.propsDatas);
  return (
    <ComposedChart
      width={1100}
      height={600}
      data={props.propsDatas}
      margin={{
        top: 50,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      {/* <CartesianGrid stroke="#f5f5f5" /> */}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="incDec" scale="band" value="누적 확진자" />
      {/* <YAxis label={{ value: '원', offset: 30, angle: 0, position: 'top' }} /> */}
      <YAxis label={{ value: "명" , offset: 30, angle: 0, position: 'top' }} type="number" domain={[0, 'dataMax']} />
      <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
      <Legend />
      <Bar dataKey="incDec" barSize={40} fill="#FA5858" />
    </ComposedChart>
  );
}
