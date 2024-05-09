import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const UpdateSensorSettings = () => {
  const [temperature, setTemperature] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = {
      temperature,
      moisture,
      humidity
    };
  
    const blob = new Blob([JSON.stringify(data, null, 2)], {type : 'application/json'});
    saveAs(blob, 'sensorSettings.json');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Temperature:{'  '}    
        <input type="range" min="0" max="100" value={temperature} onChange={e => setTemperature(e.target.value)} />
        {temperature}
      </label>
      <label>
        Moisture:{'  '}    
        <input type="range" min="0" max="100" value={moisture} onChange={e => setMoisture(e.target.value)} />
        {moisture}
      </label>
      <label>
        Humidity:{'  '}     
        <input type="range" min="0" max="100" value={humidity} onChange={e => setHumidity(e.target.value)} />
        {humidity}
      </label>
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  );
};

export default UpdateSensorSettings;