import React from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import style from './TaskItem.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function TaskItem () {
  return (
    <div className={style.taskContainer}>
      <div className={style.userBlock}>
        <div className={style.userPicture}>
          <img
            src='https://mir-s3-cdn-cf.behance.net/user/115/f239ed1843837.5d888ba2db6e5.png'
            alt='User Photo'
          />
        </div>
        <div className={style.cardCaption}>
          <div className={style.userName}>Martin David</div>
          <div className={style.userAction}>Like</div>
        </div>
        <div className={style.cardActions}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      <div className={style.linkBlock}>
        <LinkPreview
          url='https://dribbble.com/shots/15798306-Fleet-Travel-Shopping-UI-Kit-2'
          descriptionLength='0'
          imageHeight="180px"
          borderColor="transparent"
        />
      </div>
      <div className={style.taskPerformBtn}>
        Perform a task
      </div>
    </div>
  );
}

export default TaskItem;
