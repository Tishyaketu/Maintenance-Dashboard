import React, { useState } from 'react';
import { maintenanceRecordSchema } from '../schemas/maintenanceRecordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import 'tailwindcss/tailwind.css';

type MaintenanceRecordFormData = z.infer<typeof maintenanceRecordSchema>;

const MaintenanceRecordForm: React.FC<{ equipmentList: { id: string, name: string }[] }> = ({ equipmentList }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<MaintenanceRecordFormData>({
    resolver: zodResolver(maintenanceRecordSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'partsReplaced',
  });

  const onSubmit = (data: MaintenanceRecordFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Equipment</label>
        <select {...register('equipmentId')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">Select Equipment</option>
          {equipmentList.map(equipment => (
            <option key={equipment.id} value={equipment.id}>{equipment.name}</option>
          ))}
        </select>
        {errors.equipmentId && <p className="text-red-500 text-xs mt-1">{errors.equipmentId.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input type="date" {...register('date')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select {...register('type')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option value="Preventive">Preventive</option>
          <option value="Repair">Repair</option>
          <option value="Emergency">Emergency</option>
        </select>
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Technician</label>
        <input {...register('technician')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        {errors.technician && <p className="text-red-500 text-xs mt-1">{errors.technician.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Hours Spent</label>
        <input type="number" {...register('hoursSpent')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        {errors.hoursSpent && <p className="text-red-500 text-xs mt-1">{errors.hoursSpent.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea {...register('description')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Parts Replaced</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex space-x-2">
            <input {...register(`partsReplaced.${index}`)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <button type="button" onClick={() => remove(index)} className="mt-1 px-3 py-2 bg-red-500 text-white rounded-md shadow-sm">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => append('')} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm">Add Part</button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select {...register('priority')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Completion Status</label>
        <select {...register('completionStatus')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Pending Parts">Pending Parts</option>
        </select>
        {errors.completionStatus && <p className="text-red-500 text-xs mt-1">{errors.completionStatus.message}</p>}
      </div>

      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default MaintenanceRecordForm;