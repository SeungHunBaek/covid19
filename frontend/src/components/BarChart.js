import React from "react";
import './Chart.css';
// import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Surface, Symbols} from "recharts";

const renderLegend = (props) => {
  const { payload } = props;  
  console.log('abc')
  console.log(props)
  console.log('barChart payload')
  console.log(payload);
  props.payload[0].value = 'aaa';
  // align: "left"
  // chartHeight: 600
  // chartWidth: 1100
  // content: props => {…}
  // iconSize: 14
  // layout: "horizontal"
  // margin: {top: 50, right: 20, bottom: 20, left: 20}
  // onBBoxUpdate: ƒ (box)
  // payload: payload => { console.log('abc'); console.log(payload); }
  // verticalAlign: "bottom"
  // width: 1060

  // return (
  //   <div className="bar-legend-item">
  //     <span className="bar-legend-item-text" >신규확진자수</span>
  //   </div>
  // );
// })
// }
  return (
    <span>
      <Surface width={20} height={20} viewBox="0 0 20 20">
        <Symbols cx={13} cy={13} type="square" size={100} fill="#FA5858" />

        </Surface>
       신규확진자 
    </span>
  );
}

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
