import React from 'react';
import style from './Balance.module.sass';
import coins from './images/coins.png';
function Balance ({balance}) {
  return (
    <>
      <div className={style.balanceWrapper}>
        <button className={style.addCoins}>+</button>
        <img src={coins} alt='' className={style.coins} />
        <span className={style.balance}>{balance}</span>
      </div>
    </>
  );
}

export default Balance;
