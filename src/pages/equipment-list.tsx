// src/pages/equipment-list.tsx
import React from 'react';
import EquipmentTable from '../components/EquipmentTable';

const EquipmentListPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Equipment List</h1>
      <EquipmentTable />
    </div>
  );
};

export default EquipmentListPage;