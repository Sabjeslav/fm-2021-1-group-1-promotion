import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PopupMenuItem from './PopupMenuItem';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Switch from '@material-ui/core/Switch';
import logOut from './images/logOut.png';
import style from './PopupMenu.module.sass';
function PopupMenu () {
  const menuRef = useRef(null)
  const AntSwitch = withStyles(theme => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  const [state, setState] = useState({
    isChecked: false,
  });
  const [isActive, setIsActive] = useState(false);
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const togleActive = () => setIsActive(!isActive);
  useEffect(() => {
    const handleClick = ({target}) => {
      if (isActive && !menuRef.current.contains(target) ) {
        setIsActive(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isActive]);
  return (
    <>
      <div ref={menuRef} className={style.popupWrapper}>
        <IconButton aria-label='delete' onClick={togleActive}>
          {isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        {isActive ? (
          <ul className={style.popupMenuList}>
            <PopupMenuItem onClick={togleActive}>
              <Link className={style.popupMenuItem} to='/profile'>
                <PersonIcon />
                <p className={style.menuItemText}>My profile</p>
              </Link>
            </PopupMenuItem>
            <PopupMenuItem onClick={togleActive}>
              <Link className={style.popupMenuItem} to='/task-history'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
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
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M5 3H9C10.103 3 11 3.897 11 5V9C11 10.103 10.103 11 9 11H5C3.897 11 3 10.103 3 9V5C3 3.897 3.897 3 5 3ZM15 3H19C20.103 3 21 3.897 21 5V9C21 10.103 20.103 11 19 11H15C13.897 11 13 10.103 13 9V5C13 3.897 13.897 3 15 3ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 13H19C20.103 13 21 13.897 21 15V19C21 20.103 20.103 21 19 21H15C13.897 21 13 20.103 13 19V15C13 13.897 13.897 13 15 13Z'
                      fill='white'
                    />
                  </mask>
                  <g mask='url(#mask0)'>
                    <rect width='24' height='24' fill='none' />
                  </g>
                </svg>
                <p className={style.menuItemText}>Task history</p>
              </Link>
            </PopupMenuItem>
            <div className={style.line}></div>
            <PopupMenuItem
              className={style.popupMenuItem}
            >
              <WbSunnyIcon />
              <p className={style.menuItemText}>Dark mode</p>
              <Switch
                className={style.switch}
                checked={state.isChecked}
                onChange={handleChange}
                color='primary'
                name='isChecked'
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </PopupMenuItem>
            <div className={style.line}></div>
            <PopupMenuItem
              onClick={togleActive}
              className={style.popupMenuItem}
            >
              <button className={style.logOut}>
                <img src={logOut} alt='' />
                <p className={style.menuItemText}>Log out</p>
              </button>
            </PopupMenuItem>
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default PopupMenu;
