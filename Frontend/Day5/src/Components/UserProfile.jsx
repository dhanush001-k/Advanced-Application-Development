
const UserProfile = () => {
  // Mock user profile data
  const userProfile = {
    username: "example_user",
    fullName: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    phone: "123-456-7890",
    imageUrl: "../images/loan2.jpg" // URL to user's profile image
  };

  return (
    <div style={profileContainerStyle}>
        <center>
      <h2>User Profile</h2>
        <img src={userProfile.imageUrl} alt="Profile" style={profileImageStyle} />
      <div style={profileContentStyle}>
        <div style={profileDetailsStyle}>
          <p><strong>Username:</strong> {userProfile.username}</p>
          <br></br>
          <p><strong>Full Name:</strong> {userProfile.fullName}</p>
          <br></br>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <br></br>
          <p><strong>Address:</strong> {userProfile.address}</p>
          <br></br>
          <p><strong>Phone:</strong> {userProfile.phone}</p>
          <br></br>
        </div>
      </div>
      </center>
    </div>
  );
};

export default UserProfile;

const profileContainerStyle = {
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  padding: "20px",
  marginBottom: "20px",
};

const profileContentStyle = {
  display: "flex",
  alignItems: "center",
};

const profileImageStyle = {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  marginRight: "20px",
};

const profileDetailsStyle = {
  flex: "1",
  fontSize:"20px",
};
