import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', dataset1: 65, dataset2: 45 },
  { name: 'Feb', dataset1: 59, dataset2: 89 },
  { name: 'Mar', dataset1: 80, dataset2: 75 },
  { name: 'Apr', dataset1: 81, dataset2: 44 },
  { name: 'May', dataset1: 56, dataset2: 89 },
  { name: 'Jun', dataset1: 55, dataset2: 65 },
  { name: 'Jul', dataset1: 45, dataset2: 75 },
  { name: 'Aug', dataset1: 50, dataset2: 65 },
  { name: 'Sept', dataset1: 25, dataset2: 39 },
  { name: 'Oct', dataset1: 15, dataset2: 65 },
  { name: 'Nov', dataset1: 40, dataset2: 80 }
];

const OverlappingBarChart: React.FC = () => {
  return (
    <div className="w-full h-[310px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={-40}
          barSize={25}
        >
          <defs>
            <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A4D78" />
              <stop offset="100%" stopColor="#979AC2" />
            </linearGradient>
            <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6968" />
              <stop offset="100%" stopColor="#FFC3C3" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend 
            iconType="circle"
            verticalAlign="top"
            height={36}
            wrapperStyle={{
              top: 0,
              paddingBottom: "20px"
            }}
          />
          <Bar
            name="Dataset 1"
            dataKey="dataset1"
            fill="url(#redGradient)"
            radius={[10, 10, 10, 10]}
          />
          <Bar
            name="Dataset 2"
            dataKey="dataset2"
            fill="url(#purpleGradient)"
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverlappingBarChart;