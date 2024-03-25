/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'A', value: 20, color: '#F2A42C' },
  { name: 'B', value: 20, color: '#F2A42C' },
  { name: 'C', value: 20, color: '#F2A42C' },
];
const cx = 80;
const cy = 80;
const iR = 60;
const oR = 80;

export default class DeliveryStatusChart extends PureComponent {
  render() {
    return (
      <PieChart width={170} height={200}>
        <Pie
          dataKey="value"
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
