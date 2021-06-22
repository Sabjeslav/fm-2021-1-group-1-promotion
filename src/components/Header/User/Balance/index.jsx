import React from 'react'
import style from './Balance.module.sass'
import coins from './images/coins.png'
function Balance() {
  return (
    <>
      <div className={style.balanceWrapper}>
        <button className={style.addCoins}>+</button>
        <img src={coins} alt="" className={style.coins}/>
        <span className={style.balance}>2023</span>
      </div>
    </>
  )
}

export default Balance
