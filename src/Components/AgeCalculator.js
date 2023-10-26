import React, { useState } from 'react';
import './task5.css';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      const diff = today - birthDate;
      const ageDate = new Date(diff);

      const years = Math.abs(ageDate.getUTCFullYear() - 1970);

      setAge(years);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <div className="input-container">
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="date-input"
        />
      </div>
      <div className="button-container">
        <button onClick={calculateAge} className="calculate-button">
          Calculate Age
        </button>
      </div>
      {age !== null && <p className="result">You are {age} years old.</p>}
    </div>
  );
}

export default AgeCalculator;
