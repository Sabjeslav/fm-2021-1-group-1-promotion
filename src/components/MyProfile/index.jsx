import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts';
import PageHeader from '../PageHeader';
import style from './MyProfile.module.sass';
import Socials from './Socials';
import UserPhoto from './UserPhoto';
function MyProfile () {
  const {
    user,
    user: {
      data: { photo, connectedSocials },
    },
    userDispatch,
  } = useContext(CurrentUserContext);

  return (
    <>
      <div className={style.myProfile}>
        <div className={style.container}>
          <div className={style.myProfileInner}>
            <div className={style.header}>
              <PageHeader text='Profile' />
            </div>
            <div className={style.firstColumn}>
              <UserPhoto photo={photo} />
              <Socials socials={connectedSocials} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
