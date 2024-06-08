/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Germany', value: 20, color: '#676767' },
  { name: 'France', value: 20, color: '#F2A42C' },
  { name: 'Switzerland', value: 20, color: '#70C3ED' },
];

export default class DeliveryCountryStatusChart extends PureComponent {
  render() {
    return (
      <PieChart width={170} height={280}>
        <Pie
          dataKey="value"
          data={data}
          cx={"50%"}
          cy={"50%"}
          outerRadius={80}
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
