import React from 'react';
import EquipmentForm from '../components/EquipmentForm';

const EquipmentPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Equipment</h1>
      <EquipmentForm />
    </div>
  );
};

export default EquipmentPage;