import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 500 },
];
const COLORS = ["#FF8B4F", "#7200D8"];

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={320} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
