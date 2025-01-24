import React, { useState } from 'react';
import * as ort from 'onnxruntime-web'; // ONNX Web for browser
import './App.css';

const labelEncoders = {
  area_type: { "Carpet Area": 0, "Super Area": 1, "Built-up Area": 2 },
  locality: { "Bandel": 0, "Locality_B": 1, "Locality_C": 2 },
  city: { "Kolkata": 0, "Mumbai": 1, "Bangalore": 2, "Delhi": 3, "Chennai": 4, "Hyderabad": 5 },
  furnish: { "Unfurnished": 0, "Semi-Furnished": 1, "Furnished": 2 },
  tenant: { "Family": 0, "Bachelors": 1, "Bachelors/Family": 2 },
  contact: { "Contact Owner": 0, "Contact Agent": 1, "Contact Builder": 2 },
};

const preprocess = (inputData) => {
  const { bhk, rent, size, floor, area_type, locality, city, furnish, tenant, bath, contact } = inputData;

  const areaTypeEncoded = labelEncoders.area_type[area_type];
  const localityEncoded = labelEncoders.locality[locality];
  const cityEncoded = labelEncoders.city[city];
  const furnishEncoded = labelEncoders.furnish[furnish];
  const tenantEncoded = labelEncoders.tenant[tenant];
  const contactEncoded = labelEncoders.contact[contact];

  // Process "floor" column: Calculate proportion
  const floorMatch = floor.match(/(\d+) out of (\d+)/);
  const numerator = floorMatch ? parseFloat(floorMatch[1]) : 0;
  const denominator = floorMatch ? parseFloat(floorMatch[2]) : 1;
  const floorProportion = numerator / denominator;

  return new Float32Array([
    bhk, rent, size, floorProportion, areaTypeEncoded,
    localityEncoded, cityEncoded, furnishEncoded, tenantEncoded,
    bath, contactEncoded
  ]);
};

const ModelPrediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [inputData, setInputData] = useState({
    bhk: 3,
    rent: 25000,
    size: 1500,
    floor: "3 out of 10",
    area_type: "Super Area",
    locality: "Bandel",
    city: "Kolkata",
    furnish: "Semi-Furnished",
    tenant: "Bachelors",
    bath: 2,
    contact: "Contact Owner"
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handlePredict = async () => {
    setLoading(true);
    setPrediction(null);
    try {
      // Load the ONNX model
      const session = await ort.InferenceSession.create("/models/DecisionTreeRegressor_model.onnx");


      // Preprocess input data
      const inputTensor = new ort.Tensor('float32', preprocess(inputData), [1, 11]);

      // Run the ONNX model
      const results = await session.run({ float_input: inputTensor });

      // Output prediction
      setPrediction(results.output_tensor.data[0]);
    } catch (error) {
      console.error("Error:", error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      

      
        <label>BHK: </label>
        <input
          type="number"
          name="bhk"
          value={inputData.bhk}
          onChange={handleInputChange}
        />
      

      
        <label>Rent: </label>
        <input
          type="number"
          name="rent"
          value={inputData.rent}
          onChange={handleInputChange}
        />
      

      <div>
        <label>Size: </label>
        <input
          type="number"
          name="size"
          value={inputData.size}
          onChange={handleInputChange}
        />
      

     
        <label>Floor: </label>
        <input
          type="text"
          name="floor"
          value={inputData.floor}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Area Type: </label>
        <select
          name="area_type"
          value={inputData.area_type}
          onChange={handleInputChange}
        >
          <option value="Carpet Area">Carpet Area</option>
          <option value="Super Area">Super Area</option>
          <option value="Built Area">Built-up Area</option>
          
        </select>
      </div>

      <div>
        <label>Locality: </label>
        <input
          type="text"
          name="Locality"
          value={inputData.locality}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>City: </label>
        <select
          name="city"
          value={inputData.city}
          onChange={handleInputChange}
        >
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      <div>
        <label>Furnish: </label>
        <select
          name="furnish"
          value={inputData.furnish}
          onChange={handleInputChange}
        >
          <option value="Unfurnished">Unfurnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Furnished">Furnished</option>
        </select>
      </div>

      <div>
        <label>Tenant: </label>
        <select
          name="tenant"
          value={inputData.tenant}
          onChange={handleInputChange}
        >
          <option value="Family">Family</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Bachelors/Family">Bachelors/Family</option>
        </select>
      </div>

      <div>
        <label>Contact: </label>
        <select
          name="contact"
          value={inputData.contact}
          onChange={handleInputChange}
        >
          <option value="Contact Owner">Contact Owner</option>
          <option value="Contact Agent">Contact Agent</option>
          <option value="Contact Builder">Contact Builder</option>
        </select>
      </div>

      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict Rent"}
      </button>

      {prediction && (
        <div>
          <h2>Predicted Rent: ₹{prediction.toFixed(4)}</h2>
        </div>
      )}
    </div>
  );
};

export default ModelPrediction;
