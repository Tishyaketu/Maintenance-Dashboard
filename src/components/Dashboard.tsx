import React from 'react';
import 'tailwindcss/tailwind.css';
import EquipmentStatusPieChart from './EquipmentStatusPieChart';
import { Equipment } from '../interfaces/Equipment';

// Dummy data for illustration
const equipmentData: Equipment[] = [
  { id: '1', name: 'Machine A', location: 'Factory 1', department: 'Machining', model: 'Model X', serialNumber: 'SN123', installDate: new Date('2023-01-01'), status: 'Operational' },
  { id: '2', name: 'Machine B', location: 'Factory 2', department: 'Assembly', model: 'Model Y', serialNumber: 'SN124', installDate: new Date('2023-02-01'), status: 'Down' },
  { id: '3', name: 'Machine C', location: 'Factory 3', department: 'Packaging', model: 'Model Z', serialNumber: 'SN125', installDate: new Date('2023-03-01'), status: 'Maintenance' },
  { id: '4', name: 'Machine D', location: 'Factory 4', department: 'Shipping', model: 'Model A', serialNumber: 'SN126', installDate: new Date('2023-04-01'), status: 'Retired' },
  // Add more data as needed
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Equipment Status Breakdown</h2>
        <EquipmentStatusPieChart equipmentData={equipmentData} />
      </div>
    </div>
  );
};

export default Dashboard;