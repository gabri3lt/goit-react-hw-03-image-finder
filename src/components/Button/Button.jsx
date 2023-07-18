import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button className={s.Button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
};
Button.propType = {
  onClick: PropTypes.func,
};

export default Button;
