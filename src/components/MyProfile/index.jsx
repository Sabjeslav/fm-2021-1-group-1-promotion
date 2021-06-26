import React,{useContext} from 'react';
import { CurrentUserContext } from '../../contexts';
import PageHeader from '../PageHeader';
import style from './MyProfile.module.sass';
import UserPhoto from './UserPhoto';
function MyProfile () {
  const {user:{data}, userDispatch} = useContext(CurrentUserContext)
  return (
    <>
      <div className={style.myProfile}>
        <div className={style.container}>
          <div className={style.myProfileInner}>
            <PageHeader text='Profile' />
            <UserPhoto photo={data.photo}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
