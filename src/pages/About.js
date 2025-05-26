import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>About Qubitaix</h2>
        <p style={styles.text}>
          Welcome to <strong>Qubitaix</strong>, our Student Performance Analysis Platform — transforming student performance through data-driven insights and intelligent technology. Our mission is to empower educators, students, and institutions with the tools to drive academic excellence through advanced analytics.
        </p>
        <p style={styles.text}>
          <strong>Qubitaix</strong> uses machine learning to provide real-time insights into student progress, helping identify areas for improvement and enabling data-driven decisions for academic success. With an intuitive dashboard, users can easily monitor trends, assess strengths and weaknesses, and implement targeted strategies for continuous growth.
        </p>
        <p style={styles.text}>
          This platform has been developed by <b>Rashad Malik T K</b>, <b>Shubham Kumar</b>, <b>Himanshu Singh</b>, and <b>Ibrahim Abakar Mahamat</b>, final-year MSc Informatics students at the Institute of Informatics and Communication, University of Delhi. We are committed to enhancing <strong>Qubitaix</strong> in step with technological advances, ensuring it remains at the forefront of educational analytics.
        </p>
        <h3 style={{ ...styles.title, fontSize: '1.5rem', marginTop: '2rem' }}>Project Naming and Vision</h3>
        <p style={styles.text}>
          As we continue to evolve and refine <strong>Qubitaix.com</strong>, our roadmap envisions far more than a system limited to student analytics. The platform is designed with scalability, intelligence, and transformative impact in mind. Below are the key directions we intend to pursue to fulfill our broader mission.
        </p>
        <p style={styles.text}>
          The name <strong>Qubitaix</strong> is a blend of deep technological and visionary significance. It is composed of three parts:
        </p>
        <ul style={{ ...styles.text, textAlign: 'left', margin: '0 auto 1rem auto', maxWidth: 700 }}>
        <ol style={{ ...styles.text, textAlign: 'left', margin: '0 auto 1rem auto', maxWidth: 700 }}>
          <li>
            <strong>“Qubit”</strong> – short for quantum bit – symbolizes the future of quantum computing, where information is processed at levels beyond classical limits. This reflects our ambition to build systems that are at the forefront of computation and intelligence.
          </li>
          <li>
            <strong>“AI”</strong> – stands for Artificial Intelligence, the core enabler of our platform’s intelligence, adaptability, and learning capabilities. In the context of Qubitaix, AI refers to the implementation of intelligent systems capable of learning from data, making decisions, predicting outcomes, and enhancing user interaction — from student performance analytics to smart content generation and personalized learning experiences.
          </li>
          <li>
            <strong>“X”</strong> – represents the unknown potential and future expansion of the platform. It captures our drive to evolve Qubitaix into an all-in-one solution, integrating quantum computing, artificial intelligence, and machine learning to create powerful tools for education, discovery, and human development.
          </li>
        </ol>
        </ul>
        <p style={styles.text}>
          The name <strong>Qubitaix</strong> was envisioned and proposed by <b>Shubham Kumar</b>, the project lead and also the founder of <b>Foragle</b> (a learning and discovery platform) and <b>Swizonce</b> (a food-tech initiative designed to bring people together through food and shared experiences). His multidisciplinary background — with a Master of Science in Physics and currently pursuing a Master of Science in Informatics — uniquely positions him to bridge the gap between theoretical science and real-world applications.
        </p>

       
        <h3 style={{ ...styles.title, fontSize: '1.5rem', marginTop: '2rem' }}>Planned Future Enhancements</h3>
        <ol style={{ ...styles.text, textAlign: 'left', margin: '0 auto 1rem auto', maxWidth: 700 }}>
          <li>
            <strong>AI-Based Learning Ecosystem</strong><br />
            We plan to evolve Qubitaix.com into a full-scale AI-powered educational platform featuring:
            <ul>
              <li>AI chatbots for real-time academic help</li>
              <li>AI-generated videos for varied learning styles</li>
              <li>Personalized learning paths with predictive insights</li>
              <li>Voice-based accessibility tools for inclusive learning</li>
            </ul>
          </li>
          <li>
            <strong>Quantum Computing Integration</strong><br />
            In line with our name, we aim to explore quantum algorithms to enhance analytical speed and enable advanced educational modeling.
          </li>
          <li>
            <strong>Broader Academic Coverage</strong><br />
            Future versions will support:
            <ul>
              <li>K–12 education</li>
              <li>Competitive exam preparation</li>
              <li>Online certifications</li>
              <li>Corporate training and skill assessments</li>
            </ul>
          </li>
          <li>
            <strong>Multilingual and Inclusive Design</strong><br />
            To foster global and inclusive learning, we plan to add multilingual support and accessibility features for diverse users.
          </li>
          <li>
            <strong>Mobile App</strong><br />
            A dedicated Qubitaix mobile app is in development to ensure seamless, on-the-go access for students and educators.
          </li>
          <li>
            <strong>Enhanced Privacy and Security</strong><br />
            We are committed to implementing stronger encryption, GDPR compliance, and advanced role-based access control for secure user experiences.
          </li>
          <li>
            <strong>General AI/ML Services</strong><br />
            Beyond student analytics, Qubitaix will offer broader AI/ML services like:
            <ul>
              <li>Research and data analysis tools</li>
              <li>Intelligent dashboards</li>
              <li>Community-driven development and collaboration features</li>
            </ul>
          </li>
        </ol>
        <p style={styles.text}>
          <strong>Qubitaix.com</strong> is not just a tool, but a forward-thinking platform designed to empower education, innovation, and human progress through AI, quantum computing, and inclusive technology.
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