import React from "react";
import './Chart.css';
// import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Surface, Symbols} from "recharts";

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
      <YAxis 
        label={{ value: "명" , offset: 30, angle: 0, position: 'top' }} 
        type="number" 
        ticks={[100,200,300,400,500,600,700]}
        domain={[0, 'dataMax']} />
      <Tooltip 
        formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
      {/* <Legend displayName= 'ㅊㅊ'/> */}
      <Legend verticalAlign="bottom" content= {renderLegend} />

      {/* <Label value="Pages of my website" /> */}
      <Bar dataKey="incDec" barSize={40} fill="#FA5858" unit="명"/>
    </ComposedChart>
  );
}
