import { useState } from 'react';
import Navbar from './Navbar';
import { TextField, Button, MenuItem } from '@mui/material';
import Footer from './Footer';
import './Applyform.css';

const Applyform = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [farmLocation, setFarmLocation] = useState('');
  const [farmType, setFarmType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, phone, loanAmount, purpose, farmSize, farmLocation, farmType });
  };

  return (
    <div className="back">
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <div className="form-container">
        <h2>Apply for Agriculture Loan</h2>
        <br></br>
        <form onSubmit={handleSubmit} className="loan-form">
          <div className="form-group">
            <TextField
            className="txtfield"
              id="fullName"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="outlined"
              required
            />
          </div>
          <div className="form-group">
            <TextField
            className="txtfield"
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              required
            />
          </div>
          <div className="form-group">
            <TextField
            className="txtfield"
              id="phone"
              label="Phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="outlined"
              required
            />
          </div>
          <div className="form-group">
            <TextField
            className="txtfield"
              id="loanAmount"
              label="Loan Amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              variant="outlined"
              required
            />
          </div>
          <div className="form-group">
            <TextField
            className="txtfield"
              id="purpose"
              label="Purpose of Loan"
              multiline
              rows={4}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              variant="outlined"
              required
            />
          </div>
          <div className="form-group">
            <TextField
            className="txtfield"
              id="farmSize"
              label="Farm Size (in acres)"
              type="number"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              variant="outlined"
              required
            />
          </div>
          <div className="form-group">
            <TextField
            className="txtfield"
              id="farmLocation"
              label="Farm Location"
              value={farmLocation}
              onChange={(e) => setFarmLocation(e.target.value)}
              variant="outlined"
              required
            />
          </div>
          <div className="form-group">
            <TextField
            className="txtfield"
              id="farmType"
              select
              label="Farm Type"
              value={farmType}
              onChange={(e) => setFarmType(e.target.value)}
              variant="outlined"
              required
            >
              <MenuItem value="Crop Farming">Crop Farming</MenuItem>
              <MenuItem value="Livestock Farming">Livestock Farming</MenuItem>
              <MenuItem value="Mixed Farming">Mixed Farming</MenuItem>
            </TextField>
          </div>
          <Button id="bt" type="submit" variant="contained" >Submit</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Applyform;
