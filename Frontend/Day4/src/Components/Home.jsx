import {  Fade } from 'react-slideshow-image';
import Footer from './Footer';
import Navbar from './Navbar';
import { Box} from '@mui/material'; 
import 'react-slideshow-image/dist/styles.css';
import './Home.css';

const Home = () => {
 
  
  const fadeImages = [
    
    {
      url: '../images/loan3.jpg',
    
    },
    {
      url: '../images/loan2.jpg',
  
    },
    {
      url: '../images/loan4.jpg',
  
    },
   
  ];
  

  return (
    
    <div className="back">
      <Navbar/>
      
      <br></br>
      <br></br>
      <br></br>
      <center>


        <div id="para">
        <h2>Agriculture Loan</h2>
        <p id="p1">
          Agricultural loans are availed by a farmer to fund seasonal
          agricultural operations or related activities like animal farming,
          pisci-culture or purchase of land or agricultural tools. This type of
          loan also helps with buying inputs such as fertilizers, seeds,
          insecticides etc. and engaging labour for cultivating and harvesting
          the crops.
        </p>
        </div>
        <br></br>
        <div>
        
        <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ height:'600px' ,width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
      <marquee scrollAmount={20} behavior="scroll" direction="left">
          Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness. - Thomas Jefferson
        </marquee>

      </div>
      </center>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div id="box1">
          <br></br>
          <center>
        <h2 id="l1">Agriculture Loan Interest Rates Across Various Banks in India:</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Bank</th>
                <th>Interest Rate</th>
                <th>Processing Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>State Bank of India</td>
                <td>7.00% p.a. onwards</td>
                <td>0% p.a. to 0.35% p.a. of the loan amount</td>
              </tr>
              <tr>
                <td>IDBI Bank</td>
                <td>7% p.a. onwards</td>
                <td>At the discretion of the bank</td>
              </tr>
              <tr>
                <td>IndusInd Bank</td>
                <td>7% p.a. onwards</td>
                <td>1.25% of the loan amount + GST</td>
              </tr>
              <tr>
                <td>Central Bank of India</td>
                <td>Up to 11.05% p.a.</td>
                <td>At the discretion of the bank</td>
              </tr>
              <tr>
                <td>Karur Vysya Bank</td>
                <td>8.05% p.a. to 26% p.a. </td>
                <td>At the discretion of the bank</td>
              </tr>
            </tbody>
          </table>
          

          
          </center>
          </div>
        <div id="box2">
          <br></br>
          
            <h1 id="l2">Know more about agriculture loan;</h1>
            <br></br>
            <h2 id="l2">1.Guide to Understanding Agriculture Loans</h2>
            <p>visit:<a href="https://www.bankofbaroda.in/banking-mantra/loans-borrowings/articles/how-to-get-an-agriculture-loan"> bankofbaroda.in</a></p>
            
            <br></br>
            <h2 id="l2">2.Agriculture Loan Application Checklist</h2>
            <p>visit:<a href="https://agriinfra.dac.gov.in/Home/CheckList"> agriinfra.in</a></p>

            <br></br>
            <h2 id="l2">3.Financial Planning for Farm Expansion</h2>
            <p>visit:<a href="https://www.extension.iastate.edu/smallfarms/farm-financial-planning-program#:~:text=Farm%20Financial%20Planning%20helps%20you,questions%20of%20sound%20business%20management."> iastate.edu</a></p>

            <br></br>
            <h2 id="l2">4.Understanding Interest Rates and Loan Terms</h2>
            <p>visit:<a href="https://www.bankbazaar.com/personal-loan/agriculture-loan-interest-rates.html"> bankbazaar.com</a></p>
          
          </div>
          </div>
          <br></br>
          <center>
          <div id="bbox">
            <br></br>
            <center>
            <p id="re">These testimonials showcase the positive experiences of farmers and agricultural business owners who have benefited from the services provided by Agro Finance Pro. </p>
            </center>
            <br></br>
<Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box sx={{ position: 'relative', height: '50vh', width: '30%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
        
          <p id="pa">Thanks to Agro Finance Pro, I was able to expand my farm and increase my crop yields significantly. 
            Their flexible loan options and competitive interest rates made it possible for me to invest in new equipment and improve my farming operations.  </p>
            <br></br>
            <h2 id="he1">-John Smith, Farmer</h2>
        </Box>
        <Box sx={{ position: 'relative', height: '50vh', width: '30%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          
          <p id="pa">As a small-scale farmer, I was struggling to secure funding to purchase essential equipment for my farm. Agro Finance Pro understood my unique needs 
            and offered me a tailored loan package that fit my budget perfectly. Thanks to their support.</p>
            <br></br>
            <h2 id="he1">-Maria Rodriguez, Small-Scale Farmer</h2>
        </Box>
        <Box sx={{ position: 'relative', height: '50vh', width: '30%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          
          <p id="pa">I've been a loyal customer of Agro Finance Pro for years, and they've never disappointed me. Their team goes above and beyond to provide personalized 
            service and guidance throughout the loan application process. I can always rely on Agro Finance Pro to deliver fast and efficient solutions.</p>
          <br></br>
          <h2 id="he1">-David Johnson, Agribusiness Owner</h2>
         
        </Box>
      </Box>
      <br />
      <br />
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box sx={{ position: 'relative', height: '50vh', width: '30%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
         
          <p id="pa">I couldn't be happier with the support I received from Agro Finance Pro. When my farm suffered unexpected losses due to adverse weather conditions, 
            they were there to offer me a loan extension and restructuring options, allowing me to overcome financial setbacks and continue operating my business. 
            </p>
          <br></br>
          <h2 id="he1">-Sarah Thompson, Crop Farmer</h2>
         
        </Box>
        <Box sx={{ position: 'relative', height: '50vh', width: '30%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          
          <p id="pa">Agro Finance Pro helped me turn my dream of starting a sustainable agriculture project into a reality. Their knowledgeable staff guided me through every 
            step of the loan process and provided valuable advice on farm management and financial planning. Thanks to their expertise and support.</p>
          <br></br>
          <h2 id="he1">-Michael Brown, Sustainable Agriculture Enthusiast</h2>
          
        </Box>
        
      </Box>

          </div>
          </center>
      <Footer/>
    </div>
  );
};
export default Home;




