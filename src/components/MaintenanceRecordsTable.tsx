// src/components/MaintenanceRecordsTable.tsx
import React, { useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, SortingState } from '@tanstack/react-table';
import { MaintenanceRecord } from '../interfaces/MaintenanceRecord';
import { maintenanceRecords } from '../data/maintenanceRecords';
import { Equipment } from '../interfaces/Equipment';
import { equipmentData } from '../data/equipmentData';
import 'tailwindcss/tailwind.css';

// Helper to join equipment name
const getEquipmentName = (equipmentId: string) => {
  const equipment = equipmentData.find(eq => eq.id === equipmentId);
  return equipment ? equipment.name : 'Unknown';
};

const columnHelper = createColumnHelper<MaintenanceRecord>();

const columns = [
  columnHelper.accessor('date', {
    cell: info => info.getValue().toLocaleDateString(),
    header: 'Date',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('equipmentId', {
    cell: info => getEquipmentName(info.getValue()),
    header: 'Equipment',
    footer: info => info.column.id,
    sortingFn: (a, b) => {
      const nameA = getEquipmentName(a.original.equipmentId);
      const nameB = getEquipmentName(b.original.equipmentId);
      return nameA.localeCompare(nameB);
    },
  }),
  columnHelper.accessor('type', {
    cell: info => info.getValue(),
    header: 'Type',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('technician', {
    cell: info => info.getValue(),
    header: 'Technician',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('hoursSpent', {
    cell: info => info.getValue(),
    header: 'Hours Spent',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('description', {
    cell: info => info.getValue(),
    header: 'Description',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('priority', {
    cell: info => info.getValue(),
    header: 'Priority',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('completionStatus', {
    cell: info => info.getValue(),
    header: 'Completion Status',
    footer: info => info.column.id,
  }),
];

const MaintenanceRecordsTable: React.FC = () => {
  const [data, _setData] = useState<MaintenanceRecord[]>(maintenanceRecords);
  const [sortByEquipment, setSortByEquipment] = useState<boolean>(false);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortByEquipment(event.target.checked);
    if (event.target.checked) {
      setSorting([{ id: getEquipmentName('equipmentId'), desc: false }]);
    } else {
      setSorting([]);
    }
  };

  return (
    <div className="p-2">
      <div className="mb-4 flex space-x-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={sortByEquipment}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Sort by Equipment Name
        </label>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-2 border-b border-gray-200">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-2 border-b border-gray-200">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-2 border-b border-gray-200">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default MaintenanceRecordsTable;