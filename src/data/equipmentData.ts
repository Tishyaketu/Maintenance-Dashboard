// src/data/equipmentData.ts
import { Equipment } from '../interfaces/Equipment';

export const equipmentData: Equipment[] = [
  { id: '1', name: 'Machine A', location: 'Factory 1', department: 'Machining', model: 'Model X', serialNumber: 'SN123', installDate: new Date('2023-01-01'), status: 'Operational' },
  { id: '2', name: 'Machine B', location: 'Factory 2', department: 'Assembly', model: 'Model Y', serialNumber: 'SN124', installDate: new Date('2023-02-01'), status: 'Down' },
  { id: '3', name: 'Machine C', location: 'Factory 3', department: 'Packaging', model: 'Model Z', serialNumber: 'SN125', installDate: new Date('2023-03-01'), status: 'Maintenance' },
  { id: '4', name: 'Machine D', location: 'Factory 4', department: 'Shipping', model: 'Model A', serialNumber: 'SN126', installDate: new Date('2023-04-01'), status: 'Retired' },
  { id: '5', name: 'Machine E', location: 'Factory 5', department: 'Assembly', model: 'Model B', serialNumber: 'SN127', installDate: new Date('2023-05-01'), status: 'Operational' },
  // Add more data as needed
];