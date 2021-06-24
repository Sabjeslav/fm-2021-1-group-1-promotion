import React, { useReducer, useEffect } from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';

import style from './TaskItem.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faHeart,
  faCommentDots,
  faUserFriends,
  faEye,
  faQuestion
} from '@fortawesome/free-solid-svg-icons';

import { userInitialState, userReducer } from '../../../reducers/index';
import { actions } from '../../../reducers/actions';

function TaskItem ({ task }) {
  const [user, userDispatch] = useReducer(userReducer, userInitialState);
  const { authorId } = task;
  useEffect(() => {
    userDispatch({
      type: actions.REQUEST,
    });
    fetch('/users.json')
      .then(res => res.json())
      .then(data => {
        const author = data.filter(item => item.id === authorId);
        userDispatch({
          type: actions.SUCCESS,
          data: author[0],
        });
      })
      .catch(error => userDispatch({ type: actions.ERROR, error }));
  }, []);

  if (user.isFetching) return <div>Loading data</div>;
  else if (user.error) return <div>Error</div>;
  else {
    const { data } = user;
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
            <img src={data.photo} alt='User Photo' />
            <div className={style.actionIcon}>
              <FontAwesomeIcon
                className={iconProps.className}
                icon={iconProps.icon}
              />
            </div>
          </div>
          <div className={style.cardCaption}>
            <div className={style.userName}>{data.name}</div>
            <div className={style.userAction}>
              {task.taskType.toLowerCase()}
            </div>
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
        <div className={style.taskPerformBtn}>Perform a task</div>
      </div>
    );
  }
}

export default TaskItem;
