import  { useState } from 'react';
import AdminNav from "./AdminNav";

const Appliedloan = () => {
  // Mock loan application data with additional fields
  const [loanApplications, setLoanApplications] = useState([
    { 
      id: 1, 
      applicantName: "John Doe", 
      email: "john@example.com",
      phone: "123-456-7890",
      farmSize: "10 acres",
      farmType: "Crop Farming",
      farmLocation: "California",
      documentType: "Land Ownership Proof",
      amount: 10000, 
      status: "Pending" 
    },
    { 
      id: 2, 
      applicantName: "Jane Smith", 
      email: "jane@example.com",
      phone: "987-654-3210",
      farmSize: "20 acres",
      farmType: "Livestock Farming",
      farmLocation: "Texas",
      documentType: "Farm Equipment Inventory",
      amount: 15000, 
      status: "Pending" 
    },
    { 
      id: 3, 
      applicantName: "Bob Johnson", 
      email: "bob@example.com",
      phone: "567-890-1234",
      farmSize: "15 acres",
      farmType: "Dairy Farming",
      farmLocation: "Wisconsin",
      documentType: "Business Plan",
      amount: 20000, 
      status: "Pending" 
    }
  ]);

  // Function to handle approval of loan application
  const handleApprove = (id) => {
    // Update the status of the loan application to "Approved"
    const updatedApplications = loanApplications.map(application => {
      if (application.id === id) {
        return { ...application, status: "Approved" };
      }
      return application;
    });
    setLoanApplications(updatedApplications);
    // Implement approval logic here
    console.log(`Loan application ${id} approved.`);
  };

  // Function to handle rejection of loan application
  const handleReject = (id) => {
    // Update the status of the loan application to "Rejected"
    const updatedApplications = loanApplications.map(application => {
      if (application.id === id) {
        return { ...application, status: "Rejected" };
      }
      return application;
    });
    setLoanApplications(updatedApplications);
    // Implement rejection logic here
    console.log(`Loan application ${id} rejected.`);
  };

  return (
    <div>
      <AdminNav />
      <br />
      <br />
      <br />
      <div className="loan-applications">
       <center><h2>Loan Applications</h2> </center> 
        <div className="loan-application-container" style={containerStyle}>
          {loanApplications.map(application => (
            <div key={application.id} className="loan-application" style={applicationBoxStyle}>
              <p><strong>ID:</strong> {application.id}</p>
              <p><strong>Applicant Name:</strong> {application.applicantName}</p>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phone}</p>
              <p><strong>Farm Size:</strong> {application.farmSize}</p>
              <p><strong>Farm Type:</strong> {application.farmType}</p>
              <p><strong>Farm Location:</strong> {application.farmLocation}</p>
              <p><strong>Document Type:</strong> {application.documentType}</p>
              <p><strong>Amount:</strong> ${application.amount}</p>
              <p><strong>Status:</strong> {application.status}</p>
              {application.status === "Pending" && (
                <div className="action-buttons">
                  <button 
                    onClick={() => handleApprove(application.id)} 
                    style={{ ...buttonStyle, backgroundColor: 'green' ,color:'white'}}
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleReject(application.id)} 
                    style={{ ...buttonStyle, backgroundColor: 'red' ,color:'white'}}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appliedloan;

// CSS styles for the container
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// CSS styles for the box design
const applicationBoxStyle = {
  width: "400px", // Set a fixed width for all application boxes
  backgroundColor: "#f4f4f4",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "15px",
  marginBottom: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

// CSS styles for the button
const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft:'20px',
  border: 'none',
  transition: 'transform 0.3s ease',
  transform: 'scale(1)',
  marginTop: '10px',
};
