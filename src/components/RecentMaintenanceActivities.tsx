import React from 'react';
import { MaintenanceRecord } from '../interfaces/MaintenanceRecord';

const RecentMaintenanceActivities: React.FC<{ maintenanceRecords: MaintenanceRecord[] }> = ({ maintenanceRecords }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b border-gray-200">Date</th>
            <th className="px-4 py-2 border-b border-gray-200">Equipment ID</th>
            <th className="px-4 py-2 border-b border-gray-200">Type</th>
            <th className="px-4 py-2 border-b border-gray-200">Technician</th>
            <th className="px-4 py-2 border-b border-gray-200">Hours Spent</th>
            <th className="px-4 py-2 border-b border-gray-200">Description</th>
            <th className="px-4 py-2 border-b border-gray-200">Priority</th>
            <th className="px-4 py-2 border-b border-gray-200">Completion Status</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceRecords.map(record => (
            <tr key={record.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{new Date(record.date).toLocaleDateString()}</td>
              <td className="px-4 py-2 border-b border-gray-200">{record.equipmentId}</td>
              <td className="px-4 py-2 border-b border-gray-200">{record.type}</td>
              <td className="px-4 py-2 border-b border-gray-200">{record.technician}</td>
              <td className="px-4 py-2 border-b border-gray-200">{record.hoursSpent}</td>
              <td className="px-4 py-2 border-b border-gray-200">{record.description}</td>
              <td className="px-4 py-2 border-b border-gray-200">{record.priority}</td>
              <td className="px-4 py-2 border-b border-gray-200">{record.completionStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentMaintenanceActivities;