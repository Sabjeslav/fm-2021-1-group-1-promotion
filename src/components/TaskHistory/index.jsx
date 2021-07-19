import React from 'react'

import style from './TaskHistory.module.sass'
import PageHeader from 'components/PageHeader'
import UserTaskList from './UserTaskList'

function TaskHistory() {
  return (
    <div className={style.container}>
      <PageHeader text="Task history"/>
      <UserTaskList />
    </div>
  )
}

export default TaskHistory
