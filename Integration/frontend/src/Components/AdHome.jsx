import AdminNav from "./AdminNav";
import { NavLink } from 'react-router-dom';
import { Button} from '@mui/material';
const AdHome = () => {
  // Placeholder data for loan dashboard
  const totalLoans = 20;
  const pendingApprovals = 15;
  const overdueLoans = 8;

  // Placeholder function for loan approval action
  
  const handleLoanManage = (loanId) => {
    // Implement loan approval logic here
    console.log(`Loan ${loanId} rejected.`);
  };

  return (
    <div style={backg}>
      <AdminNav />
      <br></br>
      <br></br>
      <div className="dashboard" style={dashboardStyle}>
        <h2>Dashboard</h2>
        <div className="dashboard-stats" style={statContainerStyle}>
          <div className="stat-box" style={statBoxStyle}>
            <h3>Total Loans</h3>
            <p style={statTextStyle}>{totalLoans}</p>
          </div>
          <div className="stat-box" style={statBoxStyle}>
            <h3>Pending Approvals</h3>
            <p style={statTextStyle}>{pendingApprovals}</p>
          </div>
          <div className="stat-box" style={statBoxStyle}>
            <h3>Overdue Loans</h3>
            <p style={statTextStyle}>{overdueLoans}</p>
          </div>
        </div>
      </div>
      <div className="loan-management" style={loanManagementStyle}>
        <h1>Loan Management</h1>
      
<Button onClick={() => handleLoanManage(123)} style={buttonStyle} component={NavLink} to="/Appliedloan" sx={{
              transition: 'transform 0.3s ease', // Add transition effect
              '&:hover': {
                transform: 'scale(1.05)', // Scale up the button on hover
              },
            }}>Manage Loan</Button>

      
      </div>
     
    </div>
  );
};

export default AdHome;

// Inline styles
const dashboardStyle = {
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  marginBottom: '20px',
};

const statContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const statBoxStyle = {
  width: '30%',
  fontSize:'20px',
  backgroundColor: '#fff',
  padding: '20px',
  height:'200px',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const statTextStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
};

const loanManagementStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  backgroundColor: 'green',
  color: '#fff',
  fontSize:'25px',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  height:'80px',
  width:'250px',
  border: 'none',
  marginTop: '10px',
};

const backg={
  background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(169,99,99,0.8884803921568627) 73%)",
};

