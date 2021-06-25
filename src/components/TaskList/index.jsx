import React, { useEffect, useReducer } from 'react';

import style from './TaskList.module.sass';
import TaskItem from './TaskItem';

import { actions } from '../../reducers/actions';
import {
  tasksInitialState,
  tasksReducer,
} from '../../reducers/index';

function TaskList () {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, tasksInitialState);

  useEffect(() => {
    tasksDispatch({
      type: actions.REQUEST,
    });
    fetch('/tasks.json')
      .then(res => res.json())
      .then(data => {
        tasksDispatch({
          type: actions.SUCCESS,
          data,
        });
      })
      .catch(error => tasksDispatch({ type: actions.ERROR, error }));
  }, []);

  if (tasks.isFetching) return <div>Loading data</div>;
  else if (tasks.error) return <div>Error</div>;
  else {
    const tasksArray = () =>
      tasks.data.map(task => <TaskItem key={task.id} task={task} />);
    return (
      <div className={style.outerWrapper}>
        <div className={style.container}>
          <div className={style.headerContainer}>
            <h1 className={style.taskListCaption}>Task list</h1>
            <button className={style.createTaskBtn}>+ Create task</button>
          </div>
          <div className={style.tasksContainer}>{tasksArray()}</div>
        </div>
      </div>
    );
  }
}

export default TaskList;
