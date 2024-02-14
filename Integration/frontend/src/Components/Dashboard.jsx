import { useState } from 'react';
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from "@material-ui/core";

const Dashboard = () => {
  const [loanId, setLoanId] = useState('');
  const [loanDetails, setLoanDetails] = useState(null);

  const handleChange = (event) => {
    setLoanId(event.target.value);
  };

  const handleTrackLoan = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('JWT token not found.');
        // Optionally, you can prompt the user to log in or display an error message
        return;
      }
  
      const response = await fetch(`http://localhost:8080/api/getapply/${loanId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch loan details');
      }
  
      const data = await response.json();
      setLoanDetails(data);
    } catch (error) {
      console.error('Error fetching loan details:', error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div style={back}>
      <Navbar />
      <div style={dashboardStyle}>
        <div style={dashboardContentStyle}>
          <div style={leftHalfStyle}>
            <UserProfile />
          </div>
          <div style={rightHalfStyle}>
            <Paper elevation={3} style={loanBoxStyle}>
              <Typography variant="h5" gutterBottom>
                Loan Applied
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={headerCellStyle}>Applicant Name</TableCell>
                    <TableCell style={headerCellStyle}>Loan Type</TableCell>
                    <TableCell style={headerCellStyle}>Date Applied</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={cellStyle}>Dhanush</TableCell>
                    <TableCell style={cellStyle}>Crop Loan</TableCell>
                    <TableCell style={cellStyle}>January 30, 2024</TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </Paper>

            <Paper elevation={3} style={loanBoxStyle}>
              <Typography variant="h5" gutterBottom>
                Track Loan Status
              </Typography>
              <TextField
                label="Enter Loan ID"
                variant="outlined"
                value={loanId}
                onChange={handleChange}
                style={{ marginBottom: '10px' }}
              />
              <br></br>
              <Button variant="contained" color="primary" onClick={handleTrackLoan}>
                Track
              </Button>
              {loanDetails && (
                <div>
                  <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
                    Applicant Name: {loanDetails.fullName}
                  </Typography>
                  <Typography variant="subtitle1">
                    Loan Type: {loanDetails.loanType}
                  </Typography>
                  <Typography variant="subtitle1">
                    Status: {loanDetails.status}
                  </Typography>
                  {/* Display other loan details here */}
                </div>
              )}
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const dashboardStyle = {
  display: "flex",
  marginTop: "50px",
  flexDirection: "column",
  alignItems: "center",
};

const dashboardContentStyle = {
  display: "flex",
  width: "80%",
  height: "100%",
};

const leftHalfStyle = {
  width: "40%",
  height: "80%",
  padding: "20px",
};

const rightHalfStyle = {
  width: "80%",
  borderRadius: "2px",
  marginTop: "20px",
  height: "580px",
  boxShadow: "2px rgba(0, 0, 0, 0.1)",
  background: "rgb(0, 255, 85)",
  padding: "20px",
};

const loanBoxStyle = {
  marginBottom: "20px",
  padding: "20px",
};

const headerCellStyle = {
  fontWeight: "bold",
  borderBottom: "2px solid #ddd",
};

const cellStyle = {
  borderBottom: "1px solid #ddd",
};

const back = {
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(142,166,168,0.8576680672268908) 0%, rgba(0,212,255,1) 100%)",
};
