import styles from './Order.module.scss';
import options from './options.json';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import React, { useState } from 'react';

interface Props {
	order: string,
	setOrder: React.Dispatch<React.SetStateAction<string>>
}

export default function Order({ order, setOrder }: Props) {
  const [open, setOpen] = useState(false);
  const orderName = order && options.find(option => (
    option.value === order
  ))?.name;

  return (
    <button 
      className={classNames({
        [styles.order]: true,
        [styles['order--active']]: order !== ''
      })} 
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span> { orderName || 'Ordenar por' } </span>
      {open 
        ?	<MdKeyboardArrowUp size={20} /> 
        : <MdKeyboardArrowDown size={20} /> 
      }
      <div 
        className={classNames({
          [styles.order__options]: true,
          [styles['order__options--active']]: open
        })}
      >
        {options.map(option => (
          <div 
            className={styles.order__option} 
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}