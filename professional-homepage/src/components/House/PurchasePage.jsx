import React, { useState } from 'react';
// import HouseList from '../components/House/HouseList';
// import HouseDetails from '../components/House/HouseDetails';
// import houseData from '../components/House/houseData';

import HouseList from './HouseList';
import HouseDetails from './HouseDetails';
import houseData from './HouseData';
import './style.css';

const PurchasePage = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <div className="purchase-page">
      {selectedHouse ? (
        <HouseDetails house={selectedHouse} onClose={() => setSelectedHouse(null)} />
      ) : (
        <HouseList houses={houseData} onSelectHouse={setSelectedHouse} />
      )}
    </div>
  );
};

export default PurchasePage;
