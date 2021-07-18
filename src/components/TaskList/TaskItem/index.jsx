import React, { useContext } from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { UsersListContext } from 'contexts';
import style from './TaskItem.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faHeart,
  faCommentDots,
  faUserFriends,
  faEye,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

function TaskItem ({ task }) {
  const {
    users: { data },
  } = useContext(UsersListContext);
  const { authorId } = task;
  const postAuthor = data.filter(user => {
    if (user.id === authorId) return user;
  });
  const openPostLink = () => {
    window.open(task.postLink, '_blank').focus();
  };
  let action = {
    icon: null,
    style: null,
  };
  switch (task.taskType) {
    case 'LIKES':
      action.icon = faHeart;
      action.style = style.like;
      break;
    case 'FOLLOWERS':
      action.icon = faUserFriends;
      action.style = style.follower;
      break;
    case 'COMMENTS':
      action.icon = faCommentDots;
      action.style = style.comment;
      break;
    case 'VIEWS':
      action.icon = faEye;
      action.style = style.views;
      break;
    default:
      action.icon = faQuestion;
      action.style = style.unknown;
      break;
  }
  const iconProps = {
    className: action.style,
    icon: action.icon,
  };
  return (
    <div className={style.taskContainer}>
      <div className={style.userBlock}>
        <div className={style.userPicture}>
          <img src={postAuthor[0].photo} alt='User Photo' />
          <div className={style.actionIcon}>
            <FontAwesomeIcon
              className={iconProps.className}
              icon={iconProps.icon}
            />
          </div>
        </div>
        <div className={style.cardCaption}>
          <div className={style.userName}>{postAuthor[0].name}</div>
          <div className={style.userAction}>{task.taskType.toLowerCase()}</div>
        </div>
        <div className={style.cardActions}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      <div className={style.linkBlock}>
        <LinkPreview
          url={task.postLink}
          descriptionLength='0'
          imageHeight='180px'
          borderColor='transparent'
        />
      </div>
      <div className={style.taskPerformBtn} onClick={openPostLink}>
        Perform a task
      </div>
    </div>
  );
}

export default TaskItem;
