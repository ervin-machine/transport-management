import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan 2023',
    uv: 3000,
    time: 1398,
    amt: 2210,
  },
  {
    name: 'Feb2023',
    uv: 2000,
    time: 9800,
    amt: 2290,
  },
  {
    name: 'Mar2023',
    uv: 2780,
    time: 3908,
    amt: 2000,
  },
  {
    name: 'Apr2023',
    uv: 1890,
    time: 4800,
    amt: 2181,
  },
  {
    name: 'May2023',
    uv: 2390,
    time: 3800,
    amt: 2500,
  },
];

export default class AvgTimeDeliveryChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          width={500}
          height={220}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
