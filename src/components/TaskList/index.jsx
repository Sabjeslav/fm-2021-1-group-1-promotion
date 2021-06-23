import React from 'react'
import style from './TaskList.module.sass'
import TaskItem from './TaskItem'

function TaskList() {
  return (
    <div className={style.outerWrapper}>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <h1 className={style.taskListCaption}>Task list</h1>
          <button className={style.createTaskBtn}>+ Create task</button>
        </div>
        <div className={style.tasksContainer}>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
        </div>
      </div>
    </div>
  )
}

export default TaskList
