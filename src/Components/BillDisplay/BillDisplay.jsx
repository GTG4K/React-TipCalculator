import './BillDisplay.css';
import CostDisplay from '../CostDisplay/CostDisplay';
import Button from '../../UI/Button/Button';

const BillDisplay = (props) => {
  const tipPerPerson = Math.floor(((props.bill / props.people) * props.tipPercent) / 100);
  const totalPerPerson = Math.floor(props.bill / props.people + tipPerPerson);

  const resetCalculator = () => {
    props.onReset();
  };

  return (
    <div className="bill-display">
      <div className="bills">
        <CostDisplay title="Tip Amount" price={tipPerPerson} />
        <CostDisplay title="Total" price={totalPerPerson} />
      </div>
      <Button value="Reset" style="invert" onClick={resetCalculator} />
    </div>
  );
};

export default BillDisplay;
