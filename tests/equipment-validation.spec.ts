// tests/equipment-validation.spec.ts
import { test, expect } from '@playwright/test';

// Define the test for showing validation errors for invalid equipment data
test('Should show validation errors for invalid equipment data', async ({ page }) => {
  // Navigate to the equipment management page
  await page.goto('http://localhost:3000/equipment');

  // Attempt to submit the form with invalid data
  await page.click('button[type="submit"]');

  // Wait for validation errors to be displayed
  await page.waitForSelector('.validation-error', { timeout: 5000 });

  // Check for specific validation error messages
  const nameError = await page.locator('.validation-error[name="name"]');
  const locationError = await page.locator('.validation-error[name="location"]');
  const departmentError = await page.locator('.validation-error[name="department"]');
  const modelError = await page.locator('.validation-error[name="model"]');
  const serialNumberError = await page.locator('.validation-error[name="serialNumber"]');
  const installDateError = await page.locator('.validation-error[name="installDate"]');
  const statusError = await page.locator('.validation-error[name="status"]');

  // Verify that validation error messages are displayed
  await expect(nameError).toBeVisible();
  await expect(locationError).toBeVisible();
  await expect(departmentError).toBeVisible();
  await expect(modelError).toBeVisible();
  await expect(serialNumberError).toBeVisible();
  await expect(installDateError).toBeVisible();
  await expect(statusError).toBeVisible();
  
  // Verify the content of error messages (assuming specific error messages)
  await expect(nameError).toContainText('Name is required');
  await expect(locationError).toContainText('Location is required');
  await expect(departmentError).toContainText('Department is required');
  await expect(modelError).toContainText('Model is required');
  await expect(serialNumberError).toContainText('Serial Number is required');
  await expect(installDateError).toContainText('Install Date is required');
  await expect(statusError).toContainText('Status is required');
});