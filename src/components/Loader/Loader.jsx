import React from 'react';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <div data-glitch="Loading..." className={s.glitch}>
        Loading...
      </div>
    </div>
  );
};

export default Loader;
