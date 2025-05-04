import React from 'react';
import './Contact.css'; // Import the CSS file
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Contact = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleHomeRedirect = () => {
    navigate('/Home'); // Redirect to the home page
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We’d love to hear from you! Whether you have questions, feedback, or want to learn more about our Student Performance Analysis Platform, feel free to reach out.
      </p>
      <div className="contact-details">
        <h3>Email</h3>
        <p>For inquiries or support, please contact us at:</p>
        <p>
          <a href="mailto:contact@qubitaix.com" className="contact-link">contact@qubitaix.com</a>
        </p>

        <h3>Connect with the Developers</h3>
        <p>Our team of developers is always open to networking and collaboration. You can connect with us through LinkedIn:</p>
        <ul>
          <li>
            <a href="http://www.linkedin.com/in/rashadmaliktk" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="linkedin-icon" /> Rashad Malik T K
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/Shubhamforagle" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="linkedin-icon" /> Shubham Kumar
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ibrahim-abakar-mahamat" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="linkedin-icon" /> Ibrahim Abakar Mahamat
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/himanshu-singh-5b7756202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="linkedin-icon" /> Himanshu Singh
            </a>
          </li>
        </ul>
        <p>We look forward to connecting with you!</p>
      </div>
      <button className="home-button" onClick={handleHomeRedirect}>Go to Home</button>
    </div>
  );
};

export default Contact;