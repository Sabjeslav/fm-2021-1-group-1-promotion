import React, { useContext} from 'react';
import { CurrentUserContext } from '../../contexts';
import PageHeader from '../PageHeader';
import style from './MyProfile.module.sass';
import Socials from './Socials';
import Statistic from './Statistic';
import UserData from './UserData';
import UserPhoto from './UserPhoto';
function MyProfile () {
  const {
    user,
    user: {
      data,
      data: { photo, connectedSocials },
    },
    userDispatch,
  } = useContext(CurrentUserContext);
  if (user.isFetching) return <div>Loading data</div>;
  else if (user.error) return <div>Error</div>;
  else {
    return (
      <>
        <div className={style.myProfile}>
          <div className={style.container}>
            <div className={style.header}>
              <PageHeader text='Profile' />
            </div>
            <div className={style.myProfileInner}>
              <div className={style.firstColumn}>
                <UserPhoto photo={photo} />
                <Socials socials={connectedSocials} />
              </div>
              <div className={style.secondColumn}>
                <UserData data={data} userDispatch={userDispatch} />
              </div>
              <div className={style.thirdColumn}>
                <Statistic data={data} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyProfile;
