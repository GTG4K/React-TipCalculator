import './Button.css';

const Button = (props) => {
  const onClick = (e) => {
    props.onClick(props.value || e);
  };

  return (
    <div
      className={`Button ${props.selected && 'selected'} ${
        props.style === 'invert' && 'invert'
      } `}
      onClick={onClick}
    >
      {props.value}
    </div>
  );
};

export default Button;
