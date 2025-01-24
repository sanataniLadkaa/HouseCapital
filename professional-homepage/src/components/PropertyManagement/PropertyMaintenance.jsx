import React from 'react';
import './PropertyMaintenance.css';
import TenantManagement from './TenantManagement';
import Footer from '../Footer/Footer';


const PropertyMaintenance = () => {
  const maintenanceServices = [
    {
      id: 1,
      title: 'Plumbing & Electrical Repairs',
      description:
        'We provide expert plumbing and electrical repair services to ensure your property is fully functional and safe.',
      icon: '🔧',
    },
    {
      id: 2,
      title: 'HVAC System Maintenance',
      description:
        'Our team handles the maintenance and repair of heating, ventilation, and air conditioning systems.',
      icon: '❄️',
    },
    {
      id: 3,
      title: 'Pest Control Services',
      description:
        'Effective pest control services to keep your property free of rodents, insects, and other pests.',
      icon: '🐜',
    },
    {
      id: 4,
      title: 'Landscaping & Gardening',
      description:
        'Enhance your property’s appeal with professional landscaping and gardening services.',
      icon: '🌳',
    },
    {
      id: 5,
      title: 'Cleaning & Janitorial Services',
      description:
        'Regular cleaning and janitorial services to maintain hygiene and cleanliness.',
      icon: '🧹',
    },
  ];

  return (
    <>
    <div className="property-maintenance">
      <div className="banner">
        <h1>Property Maintenance Services</h1>
        <p>
          Keeping your property in pristine condition with our comprehensive
          maintenance services.
        </p>
      </div>
      <div className="services-grid">
        {maintenanceServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <TenantManagement/>
    </div>
<Footer/>
</>
  );
};

export default PropertyMaintenance;
