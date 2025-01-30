import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Equipment } from '../interfaces/Equipment';
import { MaintenanceRecord } from '../interfaces/MaintenanceRecord';

const MaintenanceHoursBarChart: React.FC<{ equipmentData: Equipment[], maintenanceRecords: MaintenanceRecord[] }> = ({ equipmentData, maintenanceRecords }) => {
  const data = getMaintenanceHoursByDepartment(equipmentData, maintenanceRecords);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="hours" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const getMaintenanceHoursByDepartment = (equipmentData: Equipment[], maintenanceRecords: MaintenanceRecord[]) => {
  const departmentHours: Record<string, number> = {};

  maintenanceRecords.forEach(record => {
    const equipment = equipmentData.find(eq => eq.id === record.equipmentId);
    if (equipment) {
      if (!departmentHours[equipment.department]) {
        departmentHours[equipment.department] = 0;
      }
      departmentHours[equipment.department] += record.hoursSpent;
    }
  });

  return Object.keys(departmentHours).map(department => ({
    department,
    hours: departmentHours[department],
  }));
};

export default MaintenanceHoursBarChart;