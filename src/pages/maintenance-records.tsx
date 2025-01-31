// src/pages/maintenance-records.tsx
import React from 'react';
import MaintenanceRecordsTable from '../components/MaintenanceRecordsTable';

const MaintenanceRecordsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Maintenance Records</h1>
      <MaintenanceRecordsTable  />
    </div>
  );
};

export default MaintenanceRecordsPage;