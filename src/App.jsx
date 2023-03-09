import { useState } from 'react';
import Card from './UI/Card/Card';
import BillConfigurator from './Components/BillConfigurator/BillConfigurator';
import BillDisplay from './Components/BillDisplay/BillDisplay';
import './App.css';

function App() {
  // style the body
  document.body.style.backgroundColor = '#C5E4E7';

  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');

  const [tips, setTips] = useState([
    { amount: 5, selected: false },
    { amount: 10, selected: false },
    { amount: 15, selected: false },
    { amount: 25, selected: false },
    { amount: 50, selected: false },
  ]);

  const [customTip, setCustomTips] = useState({ amount: null, selected: false });

  const selectedTipPercent = tips.find((tip) => tip.selected === true) || customTip;

  const selectTipPercent = (value) => {
    setCustomTips({ amount: null, selected: false });

    const tempTips = [...tips];
    tempTips.forEach((tip) => {
      tip.amount === value ? (tip.selected = true) : (tip.selected = false);
    });
    setTips(tempTips);
  };

  const selectCustomTip = (value) => {
    const tempTips = [...tips];
    tempTips.forEach((tip) => {
      if (tip.selected) tip.selected = false;
    });
    setTips(tempTips);

    setCustomTips({ amount: customTip.amount, selected: true });
  };

  const changeCustomTip = (value) => {
    setCustomTips({ amount: value, selected: true });
  };

  const changeBill = (value) => {
    setBill(value);
  };

  const changePeople = (value) => {
    setPeople(value);
  };

  const resetCalculator = () => {
    setTips([
      { amount: 5, selected: false },
      { amount: 10, selected: false },
      { amount: 15, selected: false },
      { amount: 25, selected: false },
      { amount: 50, selected: false },
    ]);
    setCustomTips({ amount: null, selected: false });
    setBill('');
    setPeople('');
  };

  return (
    <div className="App">
      <Card className="bill-card">
        <BillConfigurator
          tips={tips}
          bill={bill}
          people={people}
          customTip={customTip}
          onSelectTipPercent={selectTipPercent}
          onSelectCustomTip={selectCustomTip}
          onChangeCustomTip={changeCustomTip}
          onChangePeople={changePeople}
          onChangeBill={changeBill}
        />
        <BillDisplay
          tipPercent={selectedTipPercent.amount}
          bill={bill}
          people={people}
          onReset={resetCalculator}
        />
      </Card>
    </div>
  );
}

export default App;
