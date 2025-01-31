// src/data/maintenanceRecords.ts
import { MaintenanceRecord } from '../interfaces/MaintenanceRecord';

export const maintenanceRecords: MaintenanceRecord[] = [
  { id: '1', equipmentId: '1', date: new Date('2023-01-05'), type: 'Preventive', technician: 'Tech A', hoursSpent: 2, description: 'Routine check', priority: 'Low', completionStatus: 'Complete' },
  { id: '2', equipmentId: '2', date: new Date('2023-01-10'), type: 'Repair', technician: 'Tech B', hoursSpent: 3, description: 'Fixed motor', priority: 'High', completionStatus: 'Complete' },
  { id: '3', equipmentId: '3', date: new Date('2023-01-15'), type: 'Emergency', technician: 'Tech C', hoursSpent: 1, description: 'Lubricated parts', priority: 'Medium', completionStatus: 'Complete' },
  { id: '4', equipmentId: '1', date: new Date('2023-02-05'), type: 'Repair', technician: 'Tech A', hoursSpent: 4, description: 'Replaced belt', priority: 'High', completionStatus: 'Complete' },
  { id: '5', equipmentId: '3', date: new Date('2023-02-10'), type: 'Preventive', technician: 'Tech D', hoursSpent: 2, description: 'Check filters', priority: 'Low', completionStatus: 'Complete' },
  { id: '6', equipmentId: '4', date: new Date('2023-02-15'), type: 'Emergency', technician: 'Tech E', hoursSpent: 1, description: 'Cleaned nozzles', priority: 'Medium', completionStatus: 'Complete' },
  { id: '7', equipmentId: '5', date: new Date('2023-02-20'), type: 'Repair', technician: 'Tech F', hoursSpent: 3, description: 'Replaced sensor', priority: 'High', completionStatus: 'Complete' },
  // Add more records as needed
];