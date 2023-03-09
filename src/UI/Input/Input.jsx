import { useState } from 'react';
import './Input.css';

const Input = (props) => {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="input-container">
      <label htmlFor="">{props.label}</label>
      <div className="input-field">
        {props.icon && <img src={props.icon} alt="" />}
        <input
          onChange={onChange}
          className={props.className}
          type={props.type || 'text'}
          value={props.value}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
