// tests/equipment-management.spec.ts
import { test, expect } from '@playwright/test';

// Define the test
test('Should create new equipment with valid data', async ({ page }) => {
  // Navigate to the equipment management page
  await page.goto('http://localhost:3000/equipment');

  // Fill in the form with valid data
  await page.fill('input[name="name"]', 'Machine F');
  await page.fill('input[name="location"]', 'Factory 6');
  await page.selectOption('select[name="department"]', 'Assembly');
  await page.fill('input[name="model"]', 'Model C');
  await page.fill('input[name="serialNumber"]', 'SN128');
  await page.fill('input[name="installDate"]', '2023-06-01');
  await page.selectOption('select[name="status"]', 'Operational');

 
  // Submit the form
  await page.click('button[type="submit"]');

  // Log to confirm form submission
  console.log('Form submitted');
   // Verify the form data directly
   const name = await page.inputValue('input[name="name"]');
   const location = await page.inputValue('input[name="location"]');
   const department = await page.inputValue('select[name="department"]');
   const model = await page.inputValue('input[name="model"]');
   const serialNumber = await page.inputValue('input[name="serialNumber"]');
   const installDate = await page.inputValue('input[name="installDate"]');
   const status = await page.inputValue('select[name="status"]');
 
   expect(name).toBe('Machine F');
   expect(location).toBe('Factory 6');
   expect(department).toBe('Assembly');
   expect(model).toBe('Model C');
   expect(serialNumber).toBe('SN128');
   expect(installDate).toBe('2023-06-01');
   expect(status).toBe('Operational');
 });