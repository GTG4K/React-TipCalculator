import './BillConfigurator.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import dorra from '../../assets/images/icon-dollar.svg';
import person from '../../assets/images/icon-person.svg';

const BillConfigurator = (props) => {
  const selectTipPercent = (value) => {
    props.onSelectTipPercent(value);
  };

  const selectCustomTip = () => {
    props.onSelectCustomTip();
  };

  const changeCustomTip = (e) => {
    props.onChangeCustomTip(e.target.value);
  };

  const changeBill = (value) => {
    props.onChangeBill(value);
  };

  const changePeople = (value) => {
    props.onChangePeople(value);
  };

  return (
    <div className="bill-configurator">
      <Input
        label="Bill"
        icon={dorra}
        type="number"
        value={props.bill}
        placeholder="9.99"
        onChange={changeBill}
      />
      <div className="tip-percentage">
        <label>Select Tip %</label>
        <div className="inputs">
          {props.tips.map((tip) => (
            <Button
              key={tip.amount}
              value={tip.amount}
              selected={tip.selected}
              onClick={selectTipPercent}
            />
          ))}
          <input
            className={`${props.customTip.selected && 'selected'}`}
            placeholder="Custom"
            type="text"
            onClick={selectCustomTip}
            onChange={changeCustomTip}
          />
        </div>
      </div>
      <Input
        label="Number of people"
        icon={person}
        value={props.people}
        type="number"
        placeholder="1"
        onChange={changePeople}
      />
    </div>
  );
};

export default BillConfigurator;
