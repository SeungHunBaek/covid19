import React from "react";
import './Chart.css';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList} from "recharts";
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

// 숫자[,]추가처리
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;
  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {numberWithCommas(value)}명
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
      let i = 0;
      for (i = 0; i < tickMax; i =i+200) {
          tick.push(i);
      };
      tick.push(i);
    } else {
      let i = 0;
      for (i = 0; i < tickMax; i=i+100) {
          tick.push(i);
      };
      tick.push(i);
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
      >
        <LabelList dataKey="incDec" content={renderCustomizedLabel} />
      </Bar>
    </ComposedChart>
  );
}
