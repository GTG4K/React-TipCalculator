import './CostDisplay.css';

const CostDisplay = (props) => {
  return (
    <div className="cost-display">
      <div className="details">
        <h3>{props.title}</h3>
        <p>/ person</p>
      </div>
      <h2>{props.price || `$0.00`}</h2>
    </div>
  );
};

export default CostDisplay;
