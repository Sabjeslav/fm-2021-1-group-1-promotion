import React from 'react';
import style from './Balance.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

function Balance ({ balance }) {
  return (
    <>
      <div className={style.balanceWrapper}>
        <button className={style.addCoins}>+</button>
        <FontAwesomeIcon className={style.coins} icon={faCoins} />
        <span className={style.balance}>{balance}</span>
      </div>
    </>
  );
}

export default Balance;
