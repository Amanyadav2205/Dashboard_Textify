import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const StatisticsDoughnut = () => {
  const data = [
    { name: 'Overall Course Visit', value: 35 },
    { name: 'Overall Course Sale', value: 45 },
    { name: 'Empty Space', value: 20 }
  ];

  const GRADIENT_IDS = {
    blue: 'blueGradient',
    pink: 'pinkGradient'
  };

  const COLORS = [
    `url(#${GRADIENT_IDS.pink})`,
    `url(#${GRADIENT_IDS.blue})`,
    '#cbd5e1'
  ];

  return (
    <div className="flex items-center  w-full justify-between p-2">
      <div className="flex flex-col items-center gap-1 mb-2 ">
        {data.slice(0, 2).map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-1">
            <div 
              className="w-1.5 h-1.5 rounded-full" 
              style={{ 
                background: index === 0 ? 'linear-gradient(90deg, #FF9999, #FF6B6B)' :
                'linear-gradient(90deg, #97ABFF, #123597)'
              }}
            />
            <span className="text-gray-500 text-[12px]">{entry.name}</span>
          </div>
        ))}
      </div>

      <div className="relative">
        <PieChart width={100} height={100}>
          <defs>
            <linearGradient id={GRADIENT_IDS.blue} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#97ABFF" />
              <stop offset="100%" stopColor="#123597" />
            </linearGradient>
            <linearGradient id={GRADIENT_IDS.pink} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF9999" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>
          
          <Pie
            data={data}
            cx={50}
            cy={50}
            innerRadius={35}
            outerRadius={45}
            paddingAngle={0}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index]}
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white rounded-full p-2 shadow-inner">
          <div className="text-[10px] font-bold text-black">
            82.3%
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDoughnut;