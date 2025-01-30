import React from 'react';
import MaintenanceRecordForm from '../components/MaintenanceRecordForm';

const equipmentList = [
  { id: '1', name: 'Machine A' },
  { id: '2', name: 'Machine B' },
  // Add more equipment as needed
];

const MaintenancePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Maintenance Record</h1>
      <MaintenanceRecordForm equipmentList={equipmentList} />
    </div>
  );
};

export default MaintenancePage;