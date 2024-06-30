import { useSelector } from 'react-redux';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
const axios = require('axios');
const moduleTestName = localStorage.getItem('moduleTestName');
const moduleName = localStorage.getItem('moduleName');
const Buy = () => {
  const data2 = useSelector(state => state.reducera.questionResponses.map(item => item.response).join(', '));
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [orderId, setorderId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationInProgress, setVerificationInProgress] = useState(false);
  const [state, setState] = useState({
    gender: '',
    maritalStatus: '',
    age: '',
    height: 0,
    weight: 0,
    employmentStatus: '',
    sleep: '',
    healthCondition: '',
  });
  const countryCodes = [
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    // Add other countries as needed
  ];
  const sendOtp = async () => {
    try {
      const response = await fetch('http://localhost:3002/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
      });
      const result = await response.json();
      if (result.success) {
        setOtpSent(true);
        setorderId(result.orderId)
        console.log(orderId)
        alert('OTP sent successfully');
      } else {
        alert('Failed to send OTP: ' + result.message);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      console.log(orderId)
      const response = await fetch('http://localhost:3002/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, otp, orderId })
      });
      const result = await response.json();
      if (result.success) {
        alert('OTP verified successfully');
        return true;
      } else {
        alert('OTP verification failed: ' + result.message);
        return false;
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Error verifying OTP');
      return false;
    }
  };


  const handleTransaction = async (name) => {
    try {
      const response = await fetch('http://localhost:3002/buy-chai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, phoneNumber, data2, moduleTestName, moduleName }) // Assuming these are the parameters your backend expects
      });
      console.log(moduleName)
      const result = await response.json();
      if (result.success) {
        alert('Transaction successful');
      } else {
        alert('Transaction failed: ' + result.message);
      }
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed');
    }
  };

  const buyChai = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;

    if (!otpSent) {
      await sendOtp();
      return;
    }

    setVerificationInProgress(true);
    const otpVerified = await verifyOtp();
    setVerificationInProgress(false);

    if (otpVerified) {
      await handleTransaction(name);
    }
  };

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  // Generates menu items for a range of numbers
  const generateRangeItems = (start, end) => {
    const items = [];
    for (let i = start; i <= end; i++) {
      items.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
    }
    return items;
  };


  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "0px" }}>
        <form onSubmit={buyChai}>
        <div>
        <div className="container-md" style={{ width: "200%", marginTop: "0px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(4, auto)", gap: "2px" ,height: "200px"}}>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="age-label">Age</InputLabel>
        <Select
          labelId="age-label"
          id="age-select"
          value={state.age}
          label="Age *"
          onChange={handleChange('age')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {generateRangeItems(1, 100)}  {/* Generates range from 1 to 100 */}
        </Select>
      </FormControl>


      {/* Gender Dropdown */}
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender-select"
          value={state.gender}
          label="Gender *"
          onChange={handleChange('gender')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="non-binary">Non-binary</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      {/* Marital Status Dropdown */}
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="marital-status-label">Partner</InputLabel>
        <Select
          labelId="marital-status-label"
          id="marital-status-select"
          value={state.maritalStatus}
          label="Marital Status *"
          onChange={handleChange('maritalStatus')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="single">Single</MenuItem>
          <MenuItem value="married">Married</MenuItem>
          <MenuItem value="divorced">Divorced</MenuItem>
        </Select>
      </FormControl>

      {/* Height Dropdown */}
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="height-label">Height (cm)</InputLabel>
        <Select
          labelId="height-label"
          id="height-select"
          value={state.height}
          label="Height *"
          onChange={handleChange('height')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {generateRangeItems(0, 200)} {/* Generates range from 0 to 200 */}
        </Select>
      </FormControl>

      {/* Weight Dropdown */}
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="weight-label">Weight (kg)</InputLabel>
        <Select
          labelId="weight-label"
          id="weight-select"
          value={state.weight}
          label="Weight *"
          onChange={handleChange('weight')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {generateRangeItems(0, 200)} {/* Generates range from 0 to 200 */}
        </Select>
      </FormControl>

      {/* Employment Status Dropdown */}
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="employment-status-label">Work</InputLabel>
        <Select
          labelId="employment-status-label"
          id="employment-status-select"
          value={state.employmentStatus}
          label="Employment Status *"
          onChange={handleChange('employmentStatus')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="employed">Employed</MenuItem>
          <MenuItem value="unemployed">Unemployed</MenuItem>
          <MenuItem value="student">Student</MenuItem>
        </Select>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sleep-label">Sleep</InputLabel>
        <Select
          labelId="sleep-label"
          id="sleep-select"
          value={state.sleep}
          label="Sleep"
          onChange={handleChange('sleep')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Less than 4 hours">Less than 4 hours</MenuItem>
          <MenuItem value="4-6 hours">4-6 hours</MenuItem>
          <MenuItem value="6-8 hours">6-8 hours</MenuItem>
          <MenuItem value="More than 8 hours">More than 8 hours</MenuItem>
        </Select>
      </FormControl>
      {/* Health Condition Dropdown */}
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="health-condition-label">Health</InputLabel>
        <Select
          labelId="health-condition-label"
          id="health-condition-select"
          value={state.healthCondition}
          label="Health Condition"
          onChange={handleChange('healthCondition')}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Healthy">Healthy</MenuItem>
          <MenuItem value="Chronic Illness">Chronic Illness</MenuItem>
          <MenuItem value="Acute Illness">Acute Illness</MenuItem>
          <MenuItem value="Currently Taking Medication">Currently Taking Medication</MenuItem>
          <MenuItem value="Recovering from Surgery">Recovering from Surgery</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      </div>
    </div>
    <div>
      {/* Age, Gender, Marital Status, Height, Weight, and Employment Status Dropdowns remain unchanged */}

    </div>
        </form>
      </div>
    </>
  );
};

export default Buy;
