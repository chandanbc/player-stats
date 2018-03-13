import React from 'react';
import { BarChart, CartesianGrid, XAxis ,YAxis, Tooltip, Legend, Bar } from 'recharts';


const Statistics = ({data}) => 
<div><BarChart width={830} height={270} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="year" />
  <YAxis dataKey="batsman/runs" />
  <Tooltip />
  <Legend />
  <Bar dataKey="batsman/runs" fill="#8884d8" />
  
</BarChart> </div>


export default Statistics;