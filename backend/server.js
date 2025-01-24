const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow requests from other origins
app.use(bodyParser.json()); // Parse JSON data from requests

// Path to the mock database (JSON files)
const tenantsFilePath = path.join(__dirname, 'tenants.json');
const bookingsFilePath = path.join(__dirname, 'bookings.json');

// Helper functions for file operations
const readData = (filePath) => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Tenant management routes
app.get('/api/tenants', (req, res) => {
  const tenants = readData(tenantsFilePath);
  res.json(tenants);
});

app.put('/api/tenants/:id/status', (req, res) => {
  const { id } = req.params;
  const tenants = readData(tenantsFilePath);
  const tenant = tenants.find((t) => t.id === parseInt(id));

  if (tenant) {
    tenant.status = tenant.status === 'Active' ? 'Inactive' : 'Active';
    writeData(tenantsFilePath, tenants);
    res.json(tenant);
  } else {
    res.status(404).json({ message: 'Tenant not found' });
  }
});

app.put('/api/tenants/:id', (req, res) => {
  const { id } = req.params;
  const { name, apartment, contact } = req.body;
  const tenants = readData(tenantsFilePath);
  const tenantIndex = tenants.findIndex((t) => t.id === parseInt(id));

  if (tenantIndex !== -1) {
    tenants[tenantIndex] = { ...tenants[tenantIndex], name, apartment, contact };
    writeData(tenantsFilePath, tenants);
    res.json(tenants[tenantIndex]);
  } else {
    res.status(404).json({ message: 'Tenant not found' });
  }
});

app.delete('/api/tenants/:id', (req, res) => {
  const { id } = req.params;
  const tenants = readData(tenantsFilePath);
  const filteredTenants = tenants.filter((t) => t.id !== parseInt(id));

  if (filteredTenants.length < tenants.length) {
    writeData(tenantsFilePath, filteredTenants);
    res.json({ message: 'Tenant deleted successfully' });
  } else {
    res.status(404).json({ message: 'Tenant not found' });
  }
});

app.post('/api/tenants', (req, res) => {
  const { name, apartment, status, contact } = req.body;
  const tenants = readData(tenantsFilePath);
  const newTenant = { id: tenants.length ? tenants[tenants.length - 1].id + 1 : 1, name, apartment, status, contact };
  tenants.push(newTenant);
  writeData(tenantsFilePath, tenants);
  res.status(201).json(newTenant);
});

// Booking management routes
app.post('/api/book-house', (req, res) => {
  const { name, email, date, house } = req.body;
  if (!name || !email || !date || !house) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const bookings = readData(bookingsFilePath);
  const newBooking = { id: bookings.length ? bookings[bookings.length - 1].id + 1 : 1, name, email, date, house };
  bookings.push(newBooking);
  writeData(bookingsFilePath, bookings);
  res.status(201).json({ message: 'Booking confirmed!', booking: newBooking });
});

app.get('/api/bookings', (req, res) => {
  const bookings = readData(bookingsFilePath);
  res.status(200).json(bookings);
});

// Contact form submission route
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Form Data Received:', { name, email, phone, message });
  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Health check route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
