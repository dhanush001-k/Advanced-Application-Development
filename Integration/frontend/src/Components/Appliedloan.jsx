import { useState, useEffect } from 'react';
import AdminNav from "./AdminNav";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 

const Appliedloan = () => {
  const [loanApplications, setLoanApplications] = useState([]);

  useEffect(() => {
    fetchLoanApplications();
  }, []);

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('JWT token not found.');
        return;
      }
  
      const response = await fetch(`http://localhost:8080/api/update/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Approved' }) // Send only the status field
      });
  
      if (response.ok) {
        console.log(`Loan application ${id} approved successfully.`);
        // Update the loan application status locally if needed
        setLoanApplications(prevState => prevState.map(application => {
          if (application.id === id) {
            return { ...application, status: 'Approved' };
          }
          return application;
        }));
      } else {
        console.error(`Failed to approve loan application ${id}.`);
      }
    } catch (error) {
      console.error('Error approving loan application:', error);
    }
  };
  
  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('JWT token not found.');
        return;
      }
  
      const response = await fetch(`http://localhost:8080/api/update/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Rejected' }) // Send only the status field
      });
  
      if (response.ok) {
        console.log(`Loan application ${id} rejected successfully.`);
        // Update the loan application status locally if needed
        setLoanApplications(prevState => prevState.map(application => {
          if (application.id === id) {
            return { ...application, status: 'Rejected' };
          }
          return application;
        }));
      } else {
        console.error(`Failed to reject loan application ${id}.`);
      }
    } catch (error) {
      console.error('Error rejecting loan application:', error);
    }
  };

  const fetchLoanApplications = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve JWT token from local storage
      if (!token) {
        // Handle case where token is not available
        console.error('JWT token not found.');
        return;
      }

      const response = await fetch('http://localhost:8080/api/getapply', {
        headers: {
          Authorization: `Bearer ${token}` // Include token in Authorization header
        }
      });
      const data = await response.json();
      setLoanApplications(data);
    } catch (error) {
      console.error('Error fetching loan applications:', error);
    }
  };

  const toggleDetails = (id) => {
    setLoanApplications(prevState => {
      return prevState.map(application => {
        if (application.id === id) {
          return { ...application, showDetails: !application.showDetails };
        }
        return application;
      });
    });
  };

  return (
    <div style={back4}>
      <AdminNav />
      <br />
      <br />
      <br />

      <div className="loan-applications">
        <center><h2>Loan Applications</h2></center> 
        <div className="loan-application-container" style={containerStyle}>
          {loanApplications.map(application => (
            <div key={application.id} className="loan-application" style={applicationBoxStyle}>
              <button 
                key={application.id} 
                onClick={() => toggleDetails(application.id)}
                style={{ cursor: 'pointer', outline: 'none', border: 'none', background: 'none' }}
              >
                <p style={head1}><strong>{application.loanType}</strong></p>
              </button>
              {application.showDetails && (
                <div style={detailStyle}>
                  <p><strong>ID:</strong> {application.id}</p>
                  <p><strong>Applicant Name:</strong> {application.fullName}</p>
                  <p><strong>Gender:</strong> {application.gender}</p>
                  <p><strong>Marital Status:</strong> {application.maritalStatus}</p>
                  <p><strong>Email:</strong> {application.email}</p>
                  <p><strong>Phone Number:</strong> {application.phoneNumber}</p>
                  <p><strong>Address:</strong> {application.address}</p>
                  <p><strong>Loan Amount:</strong> {application.loanAmount}</p>
                  <p><strong>Purpose of Loan:</strong> {application.loanPurpose}</p>
                  <p><strong>Farm Size:</strong> {application.farmSize}</p>
                  <p><strong>Farm Location:</strong> {application.location}</p>
                  <p><strong>Annual Income:</strong> {application.income}</p>
                  <p><strong>Document:</strong> {application.document}</p>
                  {application.status === 'Approved' ? (
                    <p style={{ color: 'green',fontSize:'20px' }}>Status: Approved</p>
                  ) : application.status === 'Rejected' ? (
                    <p style={{ color: 'red',fontSize:'20px' }}>Status: Rejected</p>
                  ) : (
                    <div className="action-buttons">
                      <button 
                        onClick={() => handleApprove(application.id)} 
                        style={{ ...buttonStyle, backgroundColor: 'green', color: 'white' }}
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleReject(application.id)} 
                        style={{ ...buttonStyle, backgroundColor: 'red', color: 'white' }}
                      >
                        Reject
                      </button>
                   
                    </div>
                  )}
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

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const applicationBoxStyle = {
  width: "60%",
  backgroundColor: "#f4f4f4",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "15px",
  marginBottom: "20px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const detailStyle = {
  marginBottom: "10px",
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '20px',
  border: 'none',
  transition: 'transform 0.3s ease',
  transform: 'scale(1)',
  marginTop: '10px',
};

const back4 = {
  background: "linear-gradient(0deg, rgba(99,169,170,1) 34%, rgba(210,204,204,0.8884803921568627) 81%)",
  height:"170vh",
};

const head1={
  fontSize: "20px",
};

// const [loanApplications, setLoanApplications] = useState([
  //   { 
  //     id: 1, 
  //     applicantName: "John Doe", 
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     farmSize: "10 acres",
  //     farmType: "Crop Farming",
  //     farmLocation: "California",
  //     documentType: "Land Ownership Proof",
  //     amount: 10000, 
  //     status: "Pending" 
  //   },
  //   { 
    //     id: 2, 
  //     applicantName: "Jane Smith", 
  //     email: "jane@example.com",
  //     phone: "987-654-3210",
  //     farmSize: "20 acres",
  //     farmType: "Livestock Farming",
  //     farmLocation: "Texas",
  //     documentType: "Farm Equipment Inventory",
  //     amount: 15000, 
  //     status: "Pending" 
  //   },
  //   { 
  //     id: 3, 
  //     applicantName: "Bob Johnson", 
  //     email: "bob@example.com",
  //     phone: "567-890-1234",
  //     farmSize: "15 acres",
  //     farmType: "Dairy Farming",
  //     farmLocation: "Wisconsin",
  //     documentType: "Business Plan",
  //     amount: 20000, 
  //     status: "Pending" 
  //   }
  // ]);
  



  
  {/* <div className="loan-applications">
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
  </div> */}