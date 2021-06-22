import React from 'react';
import NavMenuItem from './NavMenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faGlobeEurope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import style from './NavMenu.module.sass';
function NavMenu () {
  return (
    <>
      <nav className={style.navMenu}>
        <NavMenuItem to='/task-list' activeClassName={style.activeNavLink} className={style.navLink}>
          <FontAwesomeIcon icon={faThLarge}/> Task-list
        </NavMenuItem>
        <NavMenuItem to="/news" activeClassName={style.activeNavLink} className={style.navLink}>
        <FontAwesomeIcon  icon={faGlobeEurope}/> News
        </NavMenuItem>
        <NavMenuItem to='/help' activeClassName={style.activeNavLink} className={style.navLink}>
        <FontAwesomeIcon  icon={faQuestionCircle}/> Help
        </NavMenuItem>
      </nav>
    </>
  );
}

export default NavMenu;
