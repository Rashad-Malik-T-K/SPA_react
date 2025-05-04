import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>About QuBitAix</h2>
        <p style={styles.text}>
          Welcome to <strong>QuBitAix</strong>, our Student Performance Analysis Platform—Transforming student performance with data-driven insights. Our mission is to empower educators, students, and institutions with the tools to drive academic excellence through intelligent analytics.
        </p>
        <p style={styles.text}>
          Powered by machine learning, <strong>QuBitAix</strong> provides real-time insights to track student progress, identify areas for improvement, and support data-driven decisions for academic success. Our intuitive dashboard presents key performance metrics, allowing you to easily monitor trends, assess strengths and weaknesses, and implement strategies for continuous growth.
        </p>
        <p style={styles.text}>
          This project has been developed by Rashad Malik T K, Shubham Kumar, Himanshu Singh, and Ibrahim Abakar Mahamat, final-year MSc Informatics students at the Institute of Informatics and Communication, University of Delhi, Delhi. We are dedicated to continuously enhancing <strong>QuBitAix</strong> as technology advances, ensuring it remains at the forefront of educational analytics.
        </p>
        <p style={styles.text}>
          Let <strong>QuBitAix</strong> guide you to better educational results—because every student deserves the opportunity to succeed.
        </p>
        <a href="/Home" style={styles.button}>Go to Home</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#1e293b',
    padding: '2rem',
    color: 'white',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: 'white',
    marginBottom: '1.5rem',
  },
  text: {
    fontSize: '1rem',
    color: 'white',
    lineHeight: '1.6',
    marginBottom: '1rem',
    fontFamily: '"Roboto", Arial, timesnew roman, sans-serif',
  },
  button: {
    display: 'inline-block',
    marginTop: '1.5rem',
    padding: '0.75rem 2rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '9999px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#1d4ed8',
  },
};

export default About;