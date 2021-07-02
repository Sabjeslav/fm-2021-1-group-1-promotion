import React from 'react';
import {
  faHeart,
  faUserPlus,
  faCalendarMinus,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { differenceInDays } from 'date-fns';
import style from './Statistic.module.sass';
import StatisticItem from './StatisticItem';
function Statistic ({ data }) {
  const { likesDelivered, usersInvited, createdAt, moneySpent } = data;
  const days = differenceInDays(Date.now(), new Date(createdAt));
  return (
    <>
      <p className={style.subtitle}>Personal Statistic</p>
      <StatisticItem
        itemData={likesDelivered}
        description='Likes delivered for all time'
        itemIcon={faHeart}
        id='likes'
      />
      <StatisticItem
        itemData={usersInvited}
        description='New users invited'
        itemIcon={faUserPlus}
        id='newUsers'
      />
      <StatisticItem
        itemData={days}
        description='Days since registration'
        itemIcon={faCalendarMinus}
        id='days'
      />
      <StatisticItem
        itemData={`$ ${moneySpent}`}
        description='Real money spent'
        itemIcon={faDollarSign}
        id='money'
      />
    </>
  );
}

export default Statistic;
