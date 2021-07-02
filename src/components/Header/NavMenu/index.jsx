import React from 'react';
import NavMenuItem from './NavMenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeEurope,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import style from './NavMenu.module.sass';
function NavMenu () {
  return (
    <>
      <nav className={style.navMenu}>
        <NavMenuItem
          to='/task-list'
          activeClassName={style.activeNavLink}
          className={style.navLink}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5 3H9C10.103 3 11 3.897 11 5V9C11 10.103 10.103 11 9 11H5C3.897 11 3 10.103 3 9V5C3 3.897 3.897 3 5 3ZM15 3H19C20.103 3 21 3.897 21 5V9C21 10.103 20.103 11 19 11H15C13.897 11 13 10.103 13 9V5C13 3.897 13.897 3 15 3ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 13H19C20.103 13 21 13.897 21 15V19C21 20.103 20.103 21 19 21H15C13.897 21 13 20.103 13 19V15C13 13.897 13.897 13 15 13Z'
            />
            <mask
              id='mask0'
              mask-type='alpha'
              maskUnits='userSpaceOnUse'
              x='3'
              y='3'
              width='18'
              height='18'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 3H9C10.103 3 11 3.897 11 5V9C11 10.103 10.103 11 9 11H5C3.897 11 3 10.103 3 9V5C3 3.897 3.897 3 5 3ZM15 3H19C20.103 3 21 3.897 21 5V9C21 10.103 20.103 11 19 11H15C13.897 11 13 10.103 13 9V5C13 3.897 13.897 3 15 3ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 13H19C20.103 13 21 13.897 21 15V19C21 20.103 20.103 21 19 21H15C13.897 21 13 20.103 13 19V15C13 13.897 13.897 13 15 13Z'
                fill='white'
              />
            </mask>
            <g mask='url(#mask0)'>
              <rect width='24' height='24' fill='none' />
            </g>
          </svg>
          <p className={style.navMenuItemText}>Task-list</p>
        </NavMenuItem>
        <NavMenuItem
          to='/news'
          activeClassName={style.activeNavLink}
          className={style.navLink}
        >
          <FontAwesomeIcon icon={faGlobeEurope} />{' '}
          <p className={style.navMenuItemText}>News</p>
        </NavMenuItem>
        <NavMenuItem
          to='/help'
          activeClassName={style.activeNavLink}
          className={style.navLink}
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> <p className={style.navMenuItemText}>Help</p>
        </NavMenuItem>
      </nav>
    </>
  );
}

export default NavMenu;
