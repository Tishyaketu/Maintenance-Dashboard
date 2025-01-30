import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MaintenanceRecord } from '../interfaces/MaintenanceRecord';

const MaintenanceHoursBarChart: React.FC<{ maintenanceRecords: MaintenanceRecord[] }> = ({ maintenanceRecords }) => {
  const departmentHours = maintenanceRecords.reduce((acc, record) => {
    acc[record.equipmentId] = (acc[record.equipmentId] || 0) + record.hoursSpent;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.keys(departmentHours).map(department => ({
    name: department,
    hours: departmentHours[department],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="hours" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MaintenanceHoursBarChart;