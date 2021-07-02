import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import style from './Logo.module.sass';
function Logo () {
  return (
    <>
      <div className={style.logo}>
        <TrendingUpIcon className={style.logoIcon}/>
        <span className={style.textLogo}>Pro-Promotion.com</span>
      </div>
    </>
  );
}

export default Logo;
