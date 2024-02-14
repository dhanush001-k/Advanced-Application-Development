import { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { TextField, Button, MenuItem, Input } from '@mui/material';
import './Applyform.css';

const Applyform = () => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMarital] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [aadhar, setAadhar] = useState('');
  const loanType = localStorage.getItem('loanType');
  
  // const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [farmLocation, setFarmLocation] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [document, setDocument] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   setSubmitted(true);
  //   console.log('Form submitted:', { fullName, gender, maritalStatus, email, phone, address, aadhar, loanType, loanAmount, purpose, farmSize, farmLocation, annualIncome, document });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        fullName,
        gender,
        maritalStatus,
        email,
        phoneNumber: phone,
        address,
        aadharNumber: aadhar,
        loanType,
        loanAmount,
        loanPurpose: purpose,
        farmSize,
        location: farmLocation,
        income: annualIncome,
        document: document?.name
    };

    // try {
    //     const response = await axios.post('http://localhost:8080/api/applications', formData);
    //     console.log('Form submitted:', response.data);
    //     setSubmitted(true);
    // } catch (error) {
    //     console.error('Error submitting form:', error);
    // }


    try {
      const jwttoken = localStorage.getItem('token'); // Retrieve JWT token from local storage
      if (!jwttoken) {
        // Handle case where token is not available
        console.error('JWT token not found.');
        return;
      }
  
      const response = await axios.post('http://localhost:8080/api/applications', formData, {
        headers: {
          Authorization: `Bearer ${jwttoken}` // Include token in Authorization header
        }
      });
      console.log('Form submitted:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return (
    <div className="back1">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="form-container">
        <h2>Application Form</h2>
        <br></br>
        {submitted ? (
          <div id="sub">
            <center>
            <p id="success"><b>Submitted successfully!</b></p></center>
            {/* Display submitted details */}
            <div>

            <br></br>
              <p><b>Full Name:</b> {fullName}</p>
              <p><b>Gender:</b> {gender}</p>
              <p><b>Marital Status:</b> {maritalStatus}</p>
              <p><b>Email:</b> {email}</p>
              <p><b>Phone:</b> {phone}</p>
              <p><b>Address:</b> {address}</p>
              <p><b>Aadhar Number:</b> {aadhar}</p>
              <p><b>Loan Type:</b> {loanType}</p>
              <p><b>Loan Amount:</b> {loanAmount}</p>
              <p><b>Purpose:</b> {purpose}</p>
              <p><b>Farm Size:</b> {farmSize}</p>
              <p><b>Farm Location:</b> {farmLocation}</p>
              <p><b>Annual Income:</b> {annualIncome}</p>
              <p><b>Document:</b> {document?.name}</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
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
                id="farmType"
                select
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                variant="outlined"
                required
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </div>
            <div className="form-group">
              <TextField
                className="txtfield"
                id="farmType"
                select
                label="Marital Status"
                value={maritalStatus}
                onChange={(e) => setMarital(e.target.value)}
                variant="outlined"
                required
              >
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Unmarried">Unmarried</MenuItem>
              </TextField>
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
                id="purpose"
                label="Address"
                multiline
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                variant="outlined"
                required
              />
            </div>
            <div className="form-group">
              <TextField
                className="txtfield"
                id="phone"
                label="Aadhar number"
                type="tel"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                variant="outlined"
                required
              />
            </div>
            <div className="form-group">
              <TextField
                className="txtfield"
                id="farmType"
                select
                label="Loan Type"
                value={loanType}
                // onChange={(e) => setLoanType(e.target.value)}
                variant="outlined"
                required
              >
                <MenuItem value="Crop Loan">Crop Loan</MenuItem>
                <MenuItem value="Agriculture Term Loan">Agriculture Term Loan</MenuItem>
                <MenuItem value="Solar Pumpset Loan">Solar Pumpset Loan</MenuItem>
                <MenuItem value="Agriculture Gold Loan">Agriculture Gold Loan</MenuItem>
                <MenuItem value="Horticulture Loan">Horticulture Loan</MenuItem>
                <MenuItem value="Farm mechanisation loan">Farm Mechanisation Loan</MenuItem>
              </TextField>
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
                id="annualIncome"
                label="Annual Income"
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
                variant="outlined"
                required
              />
            </div>
            <div className="form-group">
              <h2>Document proof</h2>
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
