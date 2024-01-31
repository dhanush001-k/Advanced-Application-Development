import { useState } from 'react';
import Navbar from './Navbar';
import { TextField, Button, MenuItem, Input } from '@mui/material';
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
  const [document, setDocument] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming form submission logic here, for now, just setting submitted to true
    setSubmitted(true);
    console.log('Form submitted:', { fullName, email, phone, loanAmount, purpose, farmSize, farmLocation, farmType, document });
  };

  return (
    <div className="back">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="form-container">
        <h2>Application Form</h2>
        <br></br>
        {submitted ? (
          <div>
            <p>Submitted successfully!</p>
            {/* Display submitted details */}
            <div>
              <p>Full Name: {fullName}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Loan Amount: {loanAmount}</p>
              <p>Purpose: {purpose}</p>
              <p>Farm Size: {farmSize}</p>
              <p>Farm Location: {farmLocation}</p>
              <p>Farm Type: {farmType}</p>
              <p>Document: {document?.name}</p>
            </div>
          </div>
        ) : (
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
            <div className="form-group">
              <Input
                className="txtfield"
                id="document"
                type="file"
                onChange={(e) => setDocument(e.target.files[0])}
                required
              />
            </div>
            <center>
            <Button id="bt" type="submit" variant="contained" sx={{
              transition: 'transform 0.3s ease', // Add transition effect
              '&:hover': {
                transform: 'scale(1.05)', // Scale up the button on hover
              },
            }}>Submit</Button></center>
          </form>
        )}
      </div>
      <br></br>
    </div>
  );
};

export default Applyform;
