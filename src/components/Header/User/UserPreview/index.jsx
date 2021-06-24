import React from 'react';
import style from './UserPreview.module.sass';
import previewPhoto from './images/previewPhoto.png'
function UserPreview ({ photo }) {
  const errorHandler = ({ target }) => {
    target.src = previewPhoto;
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
