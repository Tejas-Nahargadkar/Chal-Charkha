import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "May 2022",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "May 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={50}
          height={500}
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
          <Bar dataKey="pv" fill="#5ECD07" />
          <Bar dataKey="uv" fill="#1669E6" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
