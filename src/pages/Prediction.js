import { useLocation } from 'react-router-dom';

function Prediction() {
  const location = useLocation();
  const prediction = location.state?.prediction;

  return (
    <div>
      <h2>Prediction Result</h2>
      <p>{prediction ? `Prediction: ${prediction}` : "No prediction available."}</p>
    </div>
  );
}

export default Prediction;