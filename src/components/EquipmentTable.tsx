// src/components/EquipmentTable.tsx
import React, { useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Equipment } from '../interfaces/Equipment';
import { equipmentData } from '../data/equipmentData';
import 'tailwindcss/tailwind.css';

const columnHelper = createColumnHelper<Equipment>();

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('location', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('department', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('model', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('serialNumber', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('installDate', {
    cell: info => info.getValue().toLocaleDateString(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('status', {
    cell: info => (
      <span
        className={`px-2 py-1 rounded ${
          info.getValue() === 'Operational'
            ? 'bg-green-200'
            : info.getValue() === 'Down'
            ? 'bg-red-200'
            : info.getValue() === 'Maintenance'
            ? 'bg-yellow-200'
            : 'bg-gray-200'
        }`}
      >
        {info.getValue()}
      </span>
    ),
    footer: info => info.column.id,
  }),
];

const EquipmentTable: React.FC = () => {
  const [data, setData] = useState<Equipment[]>(equipmentData);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedIds(data.map(item => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelect = (id: string) => {
    setSelectedIds(prevSelectedIds =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter(selectedId => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleBulkUpdateStatus = (status: Equipment['status']) => {
    const updatedData = data.map(equipment => {
      if (selectedIds.includes(equipment.id)) {
        return { ...equipment, status };
      }
      return equipment;
    });
    setData(updatedData);
    setSelectedIds([]);
  };

  return (
    <div className="p-2">
      <div className="mb-4 flex space-x-2">
        <button onClick={() => handleBulkUpdateStatus('Operational')} className="px-4 py-2 bg-green-500 text-white rounded-md">Set Operational</button>
        <button onClick={() => handleBulkUpdateStatus('Down')} className="px-4 py-2 bg-red-500 text-white rounded-md">Set Down</button>
        <button onClick={() => handleBulkUpdateStatus('Maintenance')} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Set Maintenance</button>
        <button onClick={() => handleBulkUpdateStatus('Retired')} className="px-4 py-2 bg-gray-500 text-white rounded-md">Set Retired</button>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              <th className="px-4 py-2 border-b border-gray-200">
                <input type="checkbox" checked={selectedIds.length === data.length} onChange={handleSelectAll} />
              </th>
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
              <td className="px-4 py-2 border-b border-gray-200">
                <input type="checkbox" checked={selectedIds.includes(row.original.id)} onChange={() => handleSelect(row.original.id)} />
              </td>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-2 border-b border-gray-200">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTable;