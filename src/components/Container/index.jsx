import React from 'react'
import style from './Container.module.sass'

function Container(props) {
  return (
    <div className={style.mainContainer}>
      {props.children}
    </div>
  )
}

export default Container
