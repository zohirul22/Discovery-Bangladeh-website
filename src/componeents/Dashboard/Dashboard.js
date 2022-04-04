import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, CartesianGrid, Area, Cell, Bar, BarChart, PieChart, Pie } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
      <div className='chart'>
          {/* Line chart */}
          <LineChart width={400} height={400} data={data}>
          <Line  dataKey="sell" stroke="#8884d8" />
          <XAxis dataKey="month" />
            <YAxis/>
            <Tooltip />  
          </LineChart>
         {/* Area chart */}
          <AreaChart width={400} height={400}data={data} >
          <Area  dataKey="investment" stroke="#8884d8" fill="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </AreaChart>

{/* Bar chart */}
<PieChart width={400} height={400}>
<Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          
        </PieChart>


      </div>
    );
};

export default Dashboard;