import { useLocation } from 'react-router-dom';

function Prediction() {
  const location = useLocation();
  const prediction = location.state?.prediction;

  const getMessage = () => {
    if (prediction < 7) {
      return (
        <>
          😟 <strong>You need to improve!</strong> Your prediction score is: <strong>{prediction}</strong>. 
          Keep working hard, and you'll achieve better results next time!
        </>
      );
    } else if (prediction >= 7 && prediction < 14) {
      return (
        <>
          😊 <strong>Good effort!</strong> Your prediction score is: <strong>{prediction}</strong>. 
          You're on the right track! Keep pushing forward to reach even greater heights!
        </>
      );
    } else {
      return (
        <>
          🎉 <strong>Congratulations!</strong> Your prediction score is: <strong>{prediction}</strong>. 
          Excellent work! Keep up the outstanding performance!
        </>
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Prediction Result</h2>
        {prediction !== undefined ? (
          <p style={styles.message}>{getMessage()}</p>
        ) : (
          <p style={styles.message}>No prediction available.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    margin: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.5',
  },
};

export default Prediction;