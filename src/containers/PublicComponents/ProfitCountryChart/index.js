import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan 2023',
    germany: 3000,
    france: 1398,
    amt: "$2210",
  },
  {
    name: 'Feb 2023',
    germany: 2000,
    france: 9800,
    amt: "$2290",
  },
  {
    name: 'Mar 2023',
    germany: 2780,
    france: 3908,
    amt: "$2000",
  },
  {
    name: 'Apr 2023',
    germany: 1890,
    france: 4800,
    amt: "$2181",
  },
  {
    name: 'May 2023',
    germany: 2390,
    france: 3800,
    amt: "$2500",
  },
];

export default class ProfitCountryChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="95%" height={220}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
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
          <Line type="monotone" dataKey="france" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="germany" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
