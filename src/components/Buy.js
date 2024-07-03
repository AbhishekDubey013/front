import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import { Button } from './Button';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Buy = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    gender: '',
    maritalStatus: '',
    age: '',
    height: '',
    weight: '',
    employmentStatus: '',
    sleep: '',
    healthCondition: '',
  });

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

  // Submit handler to send data to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Navigating to /interview');
    navigate('/interview');
    try {
      const response = await fetch('http://localhost:5001/api/auth/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      const result = await response.json();
      console.log('Data submitted successfully:', result);
      // Optionally, reset form state after successful submission
      setState({
        gender: '',
        maritalStatus: '',
        age: '',
        height: '',
        weight: '',
        employmentStatus: '',
        sleep: '',
        healthCondition: '',
      });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "5px" }}>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <div className="container-md" style={{ width: "200%", marginTop: "0px", display: "grid", gridTemplateColumns: "repeat(1fr, 1fr)", gridTemplateRows: "repeat(4, auto)", gap: "0px", height: "300px", background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px)' }}> */}
            <div className="container-md" style={{
            width: "200%",
            marginTop: "0px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(5, auto)", // Added one more row for the button
            gap: "0px",
            height: "auto", // Adjusted to auto to accommodate content
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(5px)'
          }}>
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
                  {generateRangeItems(14, 100)}  {/* Generates range from 1 to 100 */}
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
                  {generateRangeItems(120, 250)} {/* Generates range from 0 to 200 */}
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
                  {generateRangeItems(40, 200)} {/* Generates range from 0 to 200 */}
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
                  label="Sleep *"
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
              {/* Centered Submit Button */}
              {/* <div style={{ gridRow: '1 / span 4', gridColumn: '3 / span 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
              <div style={{
              gridRow: '5', // Positioning in the last row
              gridColumn: '1 / -1', // Span across all columns
              display: 'flex',
              justifyContent: 'center', // Centering the button horizontally
              padding: '5px' // Add some padding for spacing
            }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleSubmit} 
                  color="success"
                >
                  Submit
                </Button>
              </div>
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