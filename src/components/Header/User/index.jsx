import React, { useContext } from 'react';
import { CurrentUserContext } from '../../../contexts';
import Balance from './Balance';
import UserPreview from './UserPreview';
import PopupMenu from './PopupMenu';
import style from './User.module.sass';
function User () {
  const {
    user: {
      data: { balance, photo },
    },
  } = useContext(CurrentUserContext);
  return (
    <>
      <div className={style.userWrapper}>
        <Balance balance={balance} />
        <UserPreview photo={photo} />
        <PopupMenu />
      </div>
    </>
  );
}

export default User;
