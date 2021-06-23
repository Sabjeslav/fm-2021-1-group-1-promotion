import React from 'react';

import Logo from './Logo';
import style from './Header.module.sass';
import NavMenu from './NavMenu';
import User from './User';

function Header () {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.headerInner}>
            <Logo />
            <NavMenu />
            <User />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
