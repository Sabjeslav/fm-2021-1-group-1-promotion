import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { SOCIAL_ICONS } from '../../../constants';
import style from './Socials.module.sass';
function Socials ({ socials }) {
  const getLinks = links => {
    const userLinks = [];
    for (const property in links) {
      userLinks.push(property);
    }
    return userLinks.map((linkName, id) => {
      const url = new URL(links[linkName]);
      console.log(url);
      return (
        <div key={id} className={style.socialLinkWrapper}>
          <a href={url} className={style.socialLink}>
            <FontAwesomeIcon
              className={style.icon}
              id={style[linkName]}
              icon={SOCIAL_ICONS[url.hostname]}
            />
            <span className={style.linkName}>{linkName}</span>
          </a>
          <div className={style.control}>
            <FontAwesomeIcon icon={faCheck} className={style.checked} />
            <button className={style.controlBtn}>
              <FontAwesomeIcon icon={faEllipsisV} className={style.dots} />
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className={style.socialsWrapper}>
        <p className={style.title}>Social media</p>
        {getLinks(socials)}
      </div>
    </>
  );
}

export default Socials;
