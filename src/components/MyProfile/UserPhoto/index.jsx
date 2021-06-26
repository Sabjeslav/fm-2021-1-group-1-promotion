import React from 'react';
import avatar from '../../../common/images/avatar.png'
import style from './UserPhoto.module.sass';
function UserPhoto ({ photo }) {
  const errorHandler = ({ target }) => {
    target.src = avatar;
  };
  return (
    <>
      <div className={style.photoWrapper}>
        <img src={photo} className={style.photo} onError={errorHandler} alt='' />
        <button className={style.newPhotoBtn}>+ Upload new photo</button>
      </div>
    </>
  );
}

export default UserPhoto;
