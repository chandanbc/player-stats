import React from 'react';
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis ,YAxis, Tooltip, Legend, Bar } from 'recharts';
import CustomToolTip from './tooltip';

const Statistics = ({data}) => 
<ResponsiveContainer minHeight={265} minWidth={100}>
<BarChart width={530} height={270} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="year" />
  <YAxis dataKey="batsman/runs" />
  <Tooltip content={<CustomToolTip/>}/>
  {/* <Tooltip/> */}
  <Legend />
  <Bar dataKey="batsman/runs" fill="#8884d8" />
  
</BarChart> 
</ResponsiveContainer>;


export default Statistics;