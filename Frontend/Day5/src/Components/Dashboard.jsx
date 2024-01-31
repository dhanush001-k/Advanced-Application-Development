import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
const Dashboard = () => {
  return (
    <div>
        <Navbar />
      <div style={dashboardStyle}>
      <div style={dashboardContentStyle}>
        <div style={leftHalfStyle}>
          <UserProfile />
        </div>
        <div style={rightHalfStyle}>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

const dashboardStyle = {
  display: "flex",
  marginTop:"50px",
  flexDirection: "column",
  alignItems: "center",
};

const dashboardContentStyle = {
  display: "flex",
  width: "80%",
  height:"100%",
};

const leftHalfStyle = {
  width: "40%",
  height:"80%",
  padding: "20px",
};

const rightHalfStyle = {
  width: "80%",
  borderRadius: '2px',
  marginTop:'20px',
  boxShadow: '2px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  padding: '20px',
};
