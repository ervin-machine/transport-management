import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan 2023',
        route: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Feb 2023',
        route: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Mar 2023',
        route: 2780,
        pv: 3908,
        amt: 2000,
      },
];

export default class AvgRouteDeliveryChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          width={500}
          height={230}
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
          <Bar dataKey="route" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
