import React from 'react';
import style from './UserPreview.module.sass';
import avatar from '../../../../common/images/avatar.png'
function UserPreview ({ photo }) {
  const errorHandler = ({ target }) => {
    target.src = avatar;
  };
  return (
    <>
      <div className={style.userPreviewWrapper}>
        <div className={style.previewPhotoWrapper}>
          <img
            src={photo}
            className={style.previewPhoto}
            onError={errorHandler}
            alt=''
          />
        </div>
      </div>
    </>
  );
}

export default UserPreview;
