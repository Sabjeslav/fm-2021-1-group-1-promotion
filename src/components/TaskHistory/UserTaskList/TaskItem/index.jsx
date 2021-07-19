import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPauseCircle,
  faTrashAlt,
  faPlayCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import SelectIcon from 'components/CreationPage/SelectIcon';

import style from './TaskItem.module.sass';

function TaskItem ({ data }) {
  const renderStatusBtn = status => {
    switch (status) {
      case 'ACTIVE':
        return <FontAwesomeIcon icon={faPlayCircle} />;
      case 'PAUSED':
        return <FontAwesomeIcon icon={faPauseCircle} />;
      case 'FINISHED':
        return (
          <FontAwesomeIcon icon={faPlayCircle} className={style.finishedBtn} />
        );
      default:
        break;
    }
  };

  const renderAction = status => {
    switch (status) {
      case 'ACTIVE':
        return (
          <FontAwesomeIcon icon={faTrashAlt} className={style.deleteBtn} />
        );
      case 'PAUSED':
        return (
          <FontAwesomeIcon icon={faTrashAlt} className={style.deleteBtn} />
        );
      case 'FINISHED':
        return (
          <FontAwesomeIcon icon={faCheckCircle} className={style.checkCircle} />
        );
      default:
        break;
    }
  };

  return (
    <div className={style.taskContainer}>
      <div className={style.playBtn}>{renderStatusBtn(data.status)}</div>
      <div className={style.networkWrapper}>
        <SelectIcon type={data.socialNetwork} />
        <div className={style.iconLabel}>
          {data.socialNetwork.toLowerCase()}
        </div>
      </div>
      <div className={style.taskType}>
        <SelectIcon type={data.taskType} />
        <div className={style.iconLabel}>{data.taskType.toLowerCase()}</div>
      </div>
      <div className={style.progressBarWrapper}>
        <div className={style.progressBarHeader}>
          <div className={style.progressBarNumber}>
            {data.currentExecutions}
          </div>
          <div className={style.progressBarNumber}>{data.targetExecutions}</div>
        </div>
        <div className={style.progressBarBody}>
          <div
            className={style.progressBar}
            style={{
              width: `${(data.currentExecutions / data.targetExecutions) *
                100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className={style.coinsAmount}>{data.executionPrice}</div>
      <div className={style.actionBtn}>{renderAction(data.status)}</div>
    </div>
  );
}

export default TaskItem;
