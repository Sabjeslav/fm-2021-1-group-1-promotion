import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import style from './TaskList.module.sass';
import TaskItem from './TaskItem';
import PageHeader from '../PageHeader';

import { TasksContext } from '../../contexts';

function TaskList () {
  const {
    tasks,
    tasks: { data },
  } = useContext(TasksContext);
  const sortByDate = (a, b) => {
    return a.createdAt - b.createdAt;
  };
  const sortByIsPinned = (a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return 0;
  };
  if (tasks.isFetching) return <div>Loading data</div>;
  else if (tasks.error) return <div>Error</div>;
  else {
    const tasks = data.filter(item => {
      return item.status === 'ACTIVE';
    });
    tasks.sort(sortByDate).sort(sortByIsPinned);
    const tasksArray = array =>
      array.map(task => <TaskItem key={task.id} task={task} />);
    return (
      <div className={style.container}>
        <div className={style.header}>
          <PageHeader text={'Task list'} />
          <NavLink className={style.navLink} to='/newtask'>
            <button className={style.createTaskBtn}>+ Create task</button>
          </NavLink>
        </div>
        <div className={style.tasksContainer}>{tasksArray(tasks)}</div>
      </div>
    );
  }
}

export default TaskList;
