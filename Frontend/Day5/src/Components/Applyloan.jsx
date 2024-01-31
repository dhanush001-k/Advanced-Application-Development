import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { Box, Button } from '@mui/material';
import './Apply.css';

const Applyloan = () => {


  return (
    <div className="back">
      <Navbar/>
    
      <br />
      <br />
      <br />
      <br />

      
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-around' }}> */}
        {/* <Box sx={{ position: 'relative', height: '80vh', width: '30%', backgroundColor: 'teal', padding: '0px', borderRadius: '8px', textAlign: 'center' }}>
        <img src="../images/croploan.jpg" alt="Crop Loan" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <h2 id="he">Crop Loan</h2>
          <br />
          <p>These types of loans are also known as Retail Agri Loans is a type of loan which allows a farmer to meet his short-term 
            expenses arising due to cultivation of crops, maintenance of farm equipment, and other post farm activities. </p>
          <Button variant="contained" color="primary" component={NavLink} to="/Applyform" sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>Apply Now</Button>
        </Box> */}

        <center>
        <Box sx={{height: '55vh', width: '80%', backgroundColor: 'teal', padding: '0px',  textAlign: 'center', display: 'flex' ,'&:hover': {
            transform: 'scale(1.05)', // Scale up the box on hover
            transition: 'transform 0.3s ease', // Add transition effect
          }, }}>
          <div style={{ flex: 1 }}>
            <img src="../images/croploan.jpg" alt="Crop Loan" style={{ width:'100%',height:'100%' }} />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <br></br>
            <h2 id="he">Crop Loan</h2>
            <br></br>
            <p id="apply">These types of loans are also known as Retail Agri Loans is a type of loan which allows a farmer to meet his short-term 
              expenses arising due to cultivation of crops, maintenance of farm equipment, and other post farm activities. </p>
              <br></br>
            <Button variant="contained" color="primary" component={NavLink} to="/Applyform">Apply Now</Button>
          </div>
        </Box>
        </center>

        <br></br>
        <center>
        <Box sx={{height: '55vh', width: '80%', backgroundColor: 'teal', padding: '0px', textAlign: 'center', display: 'flex','&:hover': {
            transform: 'scale(1.05)', // Scale up the box on hover
            transition: 'transform 0.3s ease', // Add transition effect
          },  }}>
          <div style={{ flex: 1 }}>
            <img src="../images/termloan.jpg" alt="Crop Loan" style={{ width:'100%',height:'100%' }} />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <br></br>
            <h2 id="he">Agricultural Term Loan</h2>
            <br></br>
            <p id="apply">These are long-term loan schemes which a farmer can avail to meet their non-seasonal expenses. One can avail this 
            loan to buy or upgrade equipment such as windmills, solar power, etc. </p>
            <br></br>
            <Button variant="contained" color="primary" component={NavLink} to="/Applyform">Apply Now</Button>
          </div>
        </Box>
        </center>

        <br></br>
        <center>
        <Box sx={{height: '55vh', width: '80%', backgroundColor: 'teal', padding: '0px',  textAlign: 'center', display: 'flex' ,'&:hover': {
            transform: 'scale(1.05)', // Scale up the box on hover
            transition: 'transform 0.3s ease', // Add transition effect
          }, }}>
          <div style={{ flex: 1 }}>
            <img src="../images/solarpumploan.jpg" alt="Crop Loan" style={{ width:'100%',height:'100%' }} />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <br></br>
            <h2 id="he">Solar Pump Set Loan</h2>
            <br></br>
            <p id="apply">If a farmer is involved in small irrigation projects and require capital to buy photo voltaic pumping system, then availing a solar pump set loan is the appropriate option. 
            The repayment tenure for such loan schemes go up to 10 years. </p>
            <br></br>
            <Button variant="contained" color="primary" component={NavLink} to="/Applyform">Apply Now</Button>
          </div>
        </Box>
        </center>

        <br></br>
        <center>
        <Box sx={{height: '55vh', width: '80%', backgroundColor: 'teal', padding: '0px',  textAlign: 'center', display: 'flex' ,'&:hover': {
            transform: 'scale(1.05)', // Scale up the box on hover
            transition: 'transform 0.3s ease', // Add transition effect
          }, }}>
          <div style={{ flex: 1 }}>
            <img src="../images/goldloan.webp" alt="Crop Loan" style={{ width:'100%',height:'100%' }} />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <br></br>
            <h2 id="he">Agricultural Gold Loan</h2>
            <br></br>
            <p id="apply">The applicant can avail this type of loan by pledging their gold ornament as security. The loan amount can be used to meet various farming expenses such as buying machinery or to meet costs 
            related to cultivation of crops. </p>
            <br></br>
            <Button variant="contained" color="primary" component={NavLink} to="/Applyform">Apply Now</Button>
          </div>
        </Box>
        </center>

        <br></br>
        <center>
        <Box sx={{height: '55vh', width: '80%', backgroundColor: 'teal', padding: '0px', textAlign: 'center', display: 'flex','&:hover': {
            transform: 'scale(1.05)', // Scale up the box on hover
            transition: 'transform 0.3s ease', // Add transition effect
          },  }}>
          <div style={{ flex: 1 }}>
            <img src="../images/horticultureloan.jpg" alt="Crop Loan" style={{ width:'100%',height:'100%' }} />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <br></br>
            <h2 id="he">Horticultural Loan</h2>
            <br></br>
            <p id="apply">Farmers involved in setting up vegetable farms and orchards can apply for a horticultural loan which not only allows them to meet the cost of managing such type of farms, but also helps in meeting 
            the expenses related to other horticulture activities such as clearing wild trees, setting up fence, etc. </p>
            <br></br>
            <Button variant="contained" color="primary" component={NavLink} to="/Applyform">Apply Now</Button>
          </div>
        </Box>
        </center>

        <br></br>
        <center>
        <Box sx={{height: '55vh', width: '80%', backgroundColor: 'teal', padding: '0px', textAlign: 'center', display: 'flex' ,'&:hover': {
            transform: 'scale(1.05)', // Scale up the box on hover
            transition: 'transform 0.3s ease', // Add transition effect
          }, }}>
          <div style={{ flex: 1 }}>
            <img src="../images/farmmechloan.jpg" alt="Crop Loan" style={{ width:'100%',height:'100%' }} />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <br></br>
            <h2 id="he">Farm Mechanisation Loan</h2>
            <br></br>
            <p id="apply">If a farmer requires working capital so that they can either purchase new farming machineries or upgrade their existing ones such as purchasing a new tractor or getting an old one repaired, 
            then they can apply for these types of loan schemes. </p>
            <br></br>
            <Button variant="contained" color="primary" component={NavLink} to="/Applyform">Apply Now</Button>
          </div>
        </Box>
        </center>


   

    </div>
  );
};

export default Applyloan;

        // <Box sx={{ position: 'relative', height: '50vh', width: '30%', backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        
        //   <h2 id="he">Agricultural Term Loan</h2>
        //   <br />
        //   <p>These are long-term loan schemes which a farmer can avail to meet their non-seasonal expenses. One can avail this 
        //     loan to buy or upgrade equipment such as windmills, solar power, etc.</p>
        //   <Button variant="contained" color="primary" component={NavLink} to="/Applyform" sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>Apply Now</Button>
        // </Box>