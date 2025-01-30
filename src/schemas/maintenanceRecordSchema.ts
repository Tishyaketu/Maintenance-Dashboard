import { z } from 'zod';

export const maintenanceRecordSchema = z.object({
  equipmentId: z.string().nonempty({ message: "Equipment is required" }),
  date: z.date().refine(date => date <= new Date(), { message: "Date must not be a future date" }),
  type: z.enum(['Preventive', 'Repair', 'Emergency']),
  technician: z.string().min(2, { message: "Technician name must be at least 2 characters long" }),
  hoursSpent: z.number().positive({ message: "Hours spent must be a positive number" }).max(24, { message: "Hours spent cannot exceed 24 hours" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters long" }),
  partsReplaced: z.array(z.string()).optional(),
  priority: z.enum(['Low', 'Medium', 'High']),
  completionStatus: z.enum(['Complete', 'Incomplete', 'Pending Parts']),
});