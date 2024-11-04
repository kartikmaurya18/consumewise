import React, { useState, useEffect } from 'react';
import './questionnaire.css';

function Questionnaire() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [bmi, setBmi] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);

  const calculateBMI = () => {
    if (!height || !weight) return;

    let heightInMeters = heightUnit === 'cm' ? height / 100 : height * 0.3048;
    let weightInKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
  };

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    setIsNameEntered(inputName.trim() !== '');
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight, heightUnit, weightUnit]);

  return (
    <div className="questionnaire-form">
      <h2>{isNameEntered && age ? `Welcome ${name} ⚕️` : 'Welcome'}</h2>
      <form>
        <div className="form-group">
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            placeholder="Enter your name" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Enter your age" 
            required 
          />
        </div>
        <div className="form-group">
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)} 
            required
            className="select-placeholder"
          >
            <option value="" disabled hidden >Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <div className="height-input">
            <input
              type="number"
              className="short-input"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height"
              required
            />
            <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
              <option value="cm">cm</option>
              <option value="feet">feet</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="weight-input">
            <input
              type="number"
              className="short-input"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              required
            />
            <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>
        {bmi && (
  <div className="form-group">
    <input 
      type="text" 
      value={`Your BMI is  : ${bmi}`} 
      readOnly 
      className="bmi-input" 
      placeholder="Your BMI" 
    />
  </div>
)}

      </form>
    </div>
  );
}

export default Questionnaire;
