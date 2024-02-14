import {  Fade } from 'react-slideshow-image';
import Footer from './Footer';
import Navbar from './Navbar';
// import { Box} from '@mui/material'; 
import 'react-slideshow-image/dist/styles.css';
import './Home.css';

const Home = () => {
 
  
  const fadeImages = [
    
    {
      url: '../images/loan3.jpg',
    
    },
    {
      url: '../images/loan5.webp',
  
    },
    {
      url: '../images/loan1.jpg',
  
    },
   
  ];
  

  return (
    
    <div className="back">
      <Navbar/>
    
      
     


        <div>
        <div id="sld">
        <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ height:'600px' ,width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
      </div>
      <br></br>
        <div id="para">
        <h2 id="fh">Agriculture Loan</h2>
        <p id="p1">
          Agricultural loans are availed by a farmer to fund seasonal
          agricultural operations or related activities like animal farming,
          pisci-culture or purchase of land or agricultural tools. This type of
          loan also helps with buying inputs such as fertilizers, seeds,
          insecticides etc. and engaging labour for cultivating and harvesting
          the crops.
        </p>
        <br></br>
        </div>
        <div id="b1">
        <p>In addition, purchasing of land, or purchasing of agricultural tools, storage of produce and transport, cost of ploughing land for sowing, weeding, 
          and transplantation also are included under purview of agricultural loans.</p>
          <br></br>
          <p>Farmers can avail an agricultural loan starting at 7% p.a. and with a processing fee ranging between zero to 4% of the loan amount. </p>
          </div>

      </div>
     
        <br></br>
        <div id="box1" >
          <br></br>
          
        <h2 id="l2">Agriculture Loan Interest Rates Across Various Banks in India:</h2>
          <table className="styled-table" >
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
          <br></br>
          </div>

          <br></br>
          <br></br>

<div className='gif'>

</div>
<br></br>
          <br></br>


          <div id="b1">
          <h2 id="l2">Features and Benefits of Agriculture Loans</h2>
          <ul>
            <li><b>Simplified Documentation:</b> When borrowing an agriculture loan, applicants will only have to submit a few documents such as a valid photo identity proof, proof of residence, etc. 
              These documents can be submitted along with one's application form.</li>
              <li><b>Quick Processing:</b> Lenders will verify your application form and the documents submitted by you, after which your loan application will be approved. The loan amount will
               be disbursed to your account soon after this.</li>
              <li><b>Competitive Interest Rate Charged:</b> Banks and financial institutions that offer agriculture loans charge a competitive rate of interest that start as low as 8.80% p.a. Borrowing 
              a loan with such a low interest rate can help you keep the overall cost of your loan down.</li>
              <li><b>Loan Repayment Tenure Options:</b> A number of agriculture loan providers offer both short-term and long-term credit solutions. Thus, based on your financial requirements and repayment capacity, 
              you can opt for a loan product that offers a suitable product term.</li>
              <li><b>No Hidden Charges:</b> When you borrow an agriculture loan, you may need to pay other charges such as the processing fee, pre-payment charges, etc. However, lenders will usually inform 
              prospective borrowers about the various charges that they may have to pay for before the loan is borrowed.</li>
          </ul>
          </div>
<br></br>
          <div id="bbox2">
<h1 id="fh">Highlights of the Union Budget 2023-24 in Terms of Agriculture</h1>
<h2>Financial Enablement:</h2>
<ul>
  <li>Establishment of the Agriculture Accelerator Fund to support agriculture start-ups by young entrepreneurs in rural areas. </li>
  <li>Increase in the Agricultural Credit Target to Rs.20 lakh Crores, with a focus on fisheries, animal husbandry, and dairying. </li>
  <li>Introduction of the PM Matsya Sampada Yojana sub-scheme with an outlay of Rs.6,000 crores for value chain efficiency. </li>
</ul>

<h2>Upscaling the Digital Ecosystem: </h2>
<ul>
  <li>Creation of a Digital Public Infrastructure for Agriculture to enhance access to credit, insurance, market intelligence, and support for the growth of Agri-tech industries and start-ups.  </li>
  <li>Approval of Rs.2,516 Crore for the computerization of 63,000 Primary Agriculture Credit Societies.  </li>
</ul>

<h2>Capacity Enhancement: </h2>
<ul>
  <li>Efforts to popularize Shree Anna (Millets) for ensuring food security and welfare of farmers.  </li>
  <li>Support to Indian Institute of Millet Research (IIMR), Hyderabad, as a Centre of Excellence for millet technology and best practices. </li>
  <li>Facilitation of 1 crore farmers for adopting Natural Farming over the next 3 years.  </li>
  <li>Establishment of 10,000 bio input resource centers for pesticide and fertilizer manufacturing. </li>
</ul>

<h2>Aggregation and Sustainability: </h2>
<ul>
  <li>Launch of a Rs.2,200-crore Atmanirbhar clean plant program to enhance availability of disease-free quality planting material.  </li>
  <li>Promotion of public-private partnerships for boosting the productivity of long staple cotton.  </li>
  <li>Introduction of the Mangrove Initiative for Shoreline Habitats & Tangible Incomes (MISHTI) for mangrove preservation and plantation.  </li>
  <li>Incentivization of states and UTs for promoting alternative fertilizers through PM Program for Restoration, Awareness, Nourishment (PM PRANAM) of Mother Earth. </li>
</ul>

<h2>Cooperation-based Economic Development: </h2>
<ul>
  <li>Formulation of a new National Cooperation Policy for modernizing cooperatives and building their competitiveness.  </li>
  <li>Amrit Darohar Scheme </li>
  <li>Implementation of the Amrit Darohar scheme over the next three years for sustained biological diversity and optimal use of wetlands, aligning with the 2030 agenda for sustainable development.  </li>
</ul>
          </div>
         
          {/* <div id="bbox">
            <br></br>
            <center>
            <p id="re">These testimonials showcase the positive experiences of farmers and agricultural business owners who have benefited from the services provided by Agro Finance Pro. </p>
            </center>
            <br></br>
        <Box sx={{ position: 'relative', height: '20vh', width: '80%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px' }}>
        
          <p id="pa">Thanks to Agro Finance Pro, I was able to expand my farm and increase my crop yields significantly. 
            Their flexible loan options and competitive interest rates made it possible for me to invest in new equipment and improve my farming operations.  </p>
          
            <h2 id="he1">-John Smith, Farmer</h2>
        </Box>
        <br></br>
        <Box sx={{ position: 'relative', height: '20vh', width: '80%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px'}}>
          
          <p id="pa">As a small-scale farmer, I was struggling to secure funding to purchase essential equipment for my farm. Agro Finance Pro understood my unique needs 
            and offered me a tailored loan package that fit my budget perfectly. Thanks to their support.</p>
           
            <h2 id="he1">-Maria Rodriguez, Small-Scale Farmer</h2>
        </Box>
        <br></br>
        <Box sx={{ position: 'relative', height: '25vh', width: '80%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px' }}>
          
          <p id="pa">I've been a loyal customer of Agro Finance Pro for years, and they've never disappointed me. Their team goes above and beyond to provide personalized 
            service and guidance throughout the loan application process. I can always rely on Agro Finance Pro to deliver fast and efficient solutions.</p>
          <h2 id="he1">-David Johnson, Agribusiness Owner</h2>
        </Box>
      <br />
        <Box sx={{ position: 'relative', height: '25vh', width: '80%', backgroundColor: 'DarkSeaGreen',color:'white', padding: '20px', borderRadius: '20px'}}>
          <p id="pa">I couldn't be happier with the support I received from Agro Finance Pro. When my farm suffered unexpected losses due to adverse weather conditions, 
            they were there to offer me a loan extension and restructuring options, allowing me to overcome financial setbacks and continue operating my business. 
            </p>
          <h2 id="he1">-Sarah Thompson, Crop Farmer</h2>
        </Box>
    
          </div> */}
         
      <Footer/>
    </div>
  );
};
export default Home;



{/* <marquee scrollAmount={20} behavior="scroll" direction="left">
    Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness. - Thomas Jefferson
  </marquee> */}


{/* <div id="box2">
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
    
  </div> */}
  {/* </div> */}