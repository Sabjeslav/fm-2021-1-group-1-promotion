import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faUserFriends,
  faEye,
  faCommentDots,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

import style from './SocialIcon.module.sass';

function SelectIcon ({ type = 'likes' }) {
  const items = {
    icon: '',
    bgstyle: '',
  };

  switch (type.toLowerCase()) {
    case 'dribbble':
      items.icon = faDribbble;
      items.bgstyle = style.dribbble;
      break;
    case 'behance':
      items.icon = faBehance;
      items.bgstyle = style.behance;
      break;
    case 'likes':
      items.icon = faHeart;
      items.bgstyle = style.like;
      break;
    case 'followers':
      items.icon = faUserFriends;
      items.bgstyle = style.followers;
      break;
    case 'comments':
      items.icon = faCommentDots;
      items.bgstyle = style.comment;
      break;
    case 'views':
      items.icon = faEye;
      items.bgstyle = style.views;
      break;
    default:
      items.icon = faQuestion;
      break;
  }

  return (
    <div className={cx(style.iconContainer, items.bgstyle)}>
      <FontAwesomeIcon icon={items.icon} />
    </div>
  );
}

SelectIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SelectIcon;
