import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for your backend API
});

export const getEquipment = async () => {
  const response = await api.get('/equipment');
  return response.data;
};

export const addEquipment = async (equipment) => {
  const response = await api.post('/equipment', equipment);
  return response.data;
};

export const getMaintenanceRecords = async () => {
  const response = await api.get('/maintenanceRecords');
  return response.data;
};

export const addMaintenanceRecord = async (record) => {
  const response = await api.post('/maintenanceRecords', record);
  return response.data;
};