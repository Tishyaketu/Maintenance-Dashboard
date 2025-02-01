"use client";
import { useEffect, useState } from 'react';
import { getEquipment, getMaintenanceRecords } from '../../services/api';
import { Equipment } from '@/interfaces/Equipment';
import { MaintenanceRecord } from '@/interfaces/MaintenanceRecord';

export default function Home() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const equipmentData = await getEquipment();
        setEquipment(equipmentData);
        
        const maintenanceRecordsData = await getMaintenanceRecords();
        setMaintenanceRecords(maintenanceRecordsData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Equipment List</h1>
      <ul>
        {equipment.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h1>Maintenance Records</h1>
      <ul>
        {maintenanceRecords.map((record) => (
          <li key={record.id}>{record.description}</li>
        ))}
      </ul>
    </div>
  );
}