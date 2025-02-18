import React, { useState, useEffect } from 'react';
import './TenantManagement.css';

const TenantManagement = () => {
  const [tenantList, setTenantList] = useState([]);
  const [newTenant, setNewTenant] = useState({ name: '', apartment: '', status: 'Active', contact: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTenant, setCurrentTenant] = useState(null);

  // Fetch tenants from the backend
  useEffect(() => {
    fetch('https://house-capital.vercel.app/api/tenants')
      .then((response) => response.json())
      .then((data) => setTenantList(data))
      .catch((error) => console.error('Error fetching tenants:', error));
  }, []);

  // Toggle tenant status
  const handleStatusToggle = async (id) => {
    try {
      const response = await fetch(`https://house-capital.vercel.app/api/tenants/${id}/toggle-status`, {
        method: 'PATCH',
      });
      const updatedTenant = await response.json();
      setTenantList((prevList) =>
        prevList.map((tenant) => (tenant.id === id ? updatedTenant : tenant))
      );
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  // Add a new tenant
  const handleAddTenant = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://house-capital.vercel.app/api/tenants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTenant),
      });
      const addedTenant = await response.json();
      setTenantList([...tenantList, addedTenant]);
      setNewTenant({ name: '', apartment: '', status: 'Active', contact: '' });
    } catch (error) {
      console.error('Error adding tenant:', error);
    }
  };

  // Edit tenant details
  const handleEditTenant = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://house-capital.vercel.app/api/tenants/${currentTenant.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentTenant),
      });
      const updatedTenant = await response.json();
      setTenantList((prevList) =>
        prevList.map((tenant) => (tenant.id === updatedTenant.id ? updatedTenant : tenant))
      );
      setIsEditing(false);
      setCurrentTenant(null);
    } catch (error) {
      console.error('Error editing tenant:', error);
    }
  };

  // Delete a tenant
  const handleDeleteTenant = async (id) => {
    try {
      await fetch(`https://house-capital.vercel.app/api/tenants/${id}`, {
        method: 'DELETE',
      });
      setTenantList((prevList) => prevList.filter((tenant) => tenant.id !== id));
    } catch (error) {
      console.error('Error deleting tenant:', error);
    }
  };

  return (
    <div className="tenant-management">
      <div className="banner">
        <h1>Tenant Management</h1>
        <p>Manage tenants, their status, and contact information.</p>
      </div>

      {/* Add New Tenant Form */}
      <form className="tenant-form" onSubmit={isEditing ? handleEditTenant : handleAddTenant}>
        <h2>{isEditing ? 'Edit Tenant' : 'Add New Tenant'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={isEditing ? currentTenant?.name : newTenant.name}
          onChange={(e) =>
            isEditing
              ? setCurrentTenant({ ...currentTenant, name: e.target.value })
              : setNewTenant({ ...newTenant, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Apartment"
          value={isEditing ? currentTenant?.apartment : newTenant.apartment}
          onChange={(e) =>
            isEditing
              ? setCurrentTenant({ ...currentTenant, apartment: e.target.value })
              : setNewTenant({ ...newTenant, apartment: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Contact"
          value={isEditing ? currentTenant?.contact : newTenant.contact}
          onChange={(e) =>
            isEditing
              ? setCurrentTenant({ ...currentTenant, contact: e.target.value })
              : setNewTenant({ ...newTenant, contact: e.target.value })
          }
          required
        />
        <button type="submit">{isEditing ? 'Save Changes' : 'Add Tenant'}</button>
        {isEditing && (
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        )}
      </form>

      {/* Tenant List */}
      <div className="tenant-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Apartment</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenantList.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.name}</td>
                <td>{tenant.apartment}</td>
                <td>
                  <span
                    className={tenant.status === 'Active' ? 'status-active' : 'status-inactive'}
                    onClick={() => handleStatusToggle(tenant.id)}
                  >
                    {tenant.status}
                  </span>
                </td>
                <td>{tenant.contact}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setCurrentTenant(tenant);
                      setIsEditing(true);
                    }}
                  >
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDeleteTenant(tenant.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantManagement;
