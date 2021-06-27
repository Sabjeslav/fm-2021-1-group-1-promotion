import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './StatisticItem.module.sass'
function StatisticItem({itemData, description,itemIcon,id}) {
  return (
    <>
    <div className={style.item}>
      <FontAwesomeIcon  className={style.icon} icon={itemIcon} id={style[id]} />
      
      <div className={style.information}>
        <h3 className={style.title}>
          {itemData}
        </h3>
        <p className={style.description}>{description}</p>
      </div>
    </div>
    </>
  )
}

export default StatisticItem
