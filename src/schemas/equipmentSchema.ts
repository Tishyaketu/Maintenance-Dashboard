import { z } from 'zod';

export const equipmentSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  location: z.string().nonempty({ message: "Location is required" }),
  department: z.enum(['Machining', 'Assembly', 'Packaging', 'Shipping']),
  model: z.string().nonempty({ message: "Model is required" }),
  serialNumber: z.string().regex(/^[a-zA-Z0-9]+$/, { message: "Serial Number must be alphanumeric" }),
  installDate: z.date().refine(date => date < new Date(), { message: "Install Date must be a past date" }),
  status: z.enum(['Operational', 'Down', 'Maintenance', 'Retired']),
});