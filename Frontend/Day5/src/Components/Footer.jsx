import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>
              Agro Finance Pro is dedicated to providing financial solutions
              for the agriculture sector.
            </p>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/Applyloan">Apply Now</a></li>
              <li><a href="/FAQs">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact Information</h2>
            <p>Email: info@agrofinancepro.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <p>Facebook | Twitter | Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
