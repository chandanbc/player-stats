import React from 'react';
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis ,YAxis, Tooltip, Legend, Bar } from 'recharts';


const Statistics = ({data}) => 
<ResponsiveContainer minHeight={600} minWidth={800}>
<BarChart width={830} height={270} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="year" />
  <YAxis dataKey="batsman/runs" />
  <Tooltip />
  <Legend />
  <Bar dataKey="batsman/runs" fill="#8884d8" />
  
</BarChart> 
</ResponsiveContainer>;


export default Statistics;