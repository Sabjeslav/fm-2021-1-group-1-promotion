import React, { useContext } from 'react';

import style from './TaskList.module.sass';
import TaskItem from './TaskItem';

import { TasksContext } from '../../contexts';

function TaskList () {
  const {
    tasks,
    tasks: { data },
  } = useContext(TasksContext);
  const sortByDate = (a, b) => {
    return a.createdAt - b.createdAt;
  };
  if (tasks.isFetching) return <div>Loading data</div>;
  else if (tasks.error) return <div>Error</div>;
  else {
    const pinnedArray = data.filter(
      item => item.isPinned === true && item.status !== 'FINISHED'
    );
    const unPinnedArray = data.filter(
      item => item.isPinned === false && item.status !== 'FINISHED'
    );
    pinnedArray.sort(sortByDate);
    unPinnedArray.sort(sortByDate);
    const tasksArray = array =>
      array.map(task => <TaskItem key={task.id} task={task} />);
    return (
      <div className={style.outerWrapper}>
        <div className={style.container}>
          <div className={style.headerContainer}>
            <h1 className={style.taskListCaption}>Task list</h1>
            <button className={style.createTaskBtn}>+ Create task</button>
          </div>
          <div className={style.tasksContainer}>
            {tasksArray(pinnedArray)}
            {tasksArray(unPinnedArray)}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
