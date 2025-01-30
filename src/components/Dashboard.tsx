import React from 'react';
import 'tailwindcss/tailwind.css';
import EquipmentStatusPieChart from './EquipmentStatusPieChart';
import MaintenanceHoursBarChart from './MaintenanceHoursBarChart';
import { Equipment } from '../interfaces/Equipment';
import { MaintenanceRecord } from '../interfaces/MaintenanceRecord';

// Dummy data for illustration
const equipmentData: Equipment[] = [
  { id: '1', name: 'Machine A', location: 'Factory 1', department: 'Machining', model: 'Model X', serialNumber: 'SN123', installDate: new Date('2023-01-01'), status: 'Operational' },
  { id: '2', name: 'Machine B', location: 'Factory 2', department: 'Assembly', model: 'Model Y', serialNumber: 'SN124', installDate: new Date('2023-02-01'), status: 'Down' },
  { id: '3', name: 'Machine C', location: 'Factory 3', department: 'Packaging', model: 'Model Z', serialNumber: 'SN125', installDate: new Date('2023-03-01'), status: 'Maintenance' },
  { id: '4', name: 'Machine D', location: 'Factory 4', department: 'Shipping', model: 'Model A', serialNumber: 'SN126', installDate: new Date('2023-04-01'), status: 'Retired' },
  // Add more data as needed
];

// Dummy maintenance records for illustration
const maintenanceRecords: MaintenanceRecord[] = [
  { id: '1', equipmentId: '1', date: new Date('2023-01-05'), type: 'Preventive', technician: 'Tech A', hoursSpent: 2, description: 'Routine check', partsReplaced: [], priority: 'Low', completionStatus: 'Complete' },
  { id: '2', equipmentId: '2', date: new Date('2023-01-10'), type: 'Repair', technician: 'Tech B', hoursSpent: 3, description: 'Fixed motor', partsReplaced: ['Motor'], priority: 'High', completionStatus: 'Complete' },
  { id: '3', equipmentId: '3', date: new Date('2023-01-15'), type: 'Preventive', technician: 'Tech C', hoursSpent: 1, description: 'Lubricated parts', partsReplaced: [], priority: 'Medium', completionStatus: 'Complete' },
  // Add more records as needed
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Equipment Status Breakdown</h2>
        <EquipmentStatusPieChart equipmentData={equipmentData} />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Maintenance Hours by Department</h2>
        <MaintenanceHoursBarChart maintenanceRecords={maintenanceRecords} />
      </div>
    </div>
  );
};

export default Dashboard;