import React, { useContext } from 'react';

import TaskItem from './TaskItem';
import style from './UserTaskList.module.sass';
import { CurrentUserContext, TasksContext } from 'contexts';

function UserTaskList () {
  const testObj = {
    status: 'active',
    network: 'behance',
    taskType: 'likes',
    progress: {
      current: 230,
      target: 400,
    },
    coins: 10,
  };

  const {
    user: {
      data: { id },
    },
  } = useContext(CurrentUserContext);
  const {
    tasks: { data },
  } = useContext(TasksContext);

  const compareByCreationDate = (a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return 0;
  };

  const sortByStatus = (a, b) => {
    if (a.status === 'FINISHED' && b.status !== 'FINISHED') return 1;
    if (a.status !== 'FINISHED' && b.status === 'FINISHED') return -1;
    return 0;
  };

  const currentUserTasks = data.filter(item => item.authorId === id);
  currentUserTasks.sort(compareByCreationDate);
  currentUserTasks.sort(sortByStatus);

  console.log(currentUserTasks);
  return (
    <div className={style.container}>
      <div className={style.listHeader}>
        <div>Status</div>
        <div className={style.network}>Network</div>
        <div className={style.typeOfTask}>Type of task</div>
        <div className={style.progress}>Progress</div>
        <div className={style.coins}>Coins</div>
      </div>
      {currentUserTasks.map((task, index) => {
        return <TaskItem data={task} key={index} />;
      })}
    </div>
  );
}

export default UserTaskList;
