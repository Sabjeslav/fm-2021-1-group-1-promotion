import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';

import style from './Footer.module.sass';

function Footer () {
  return (
    <div className={style.container}>
      <div className={style.innerWrapper}>
        <div className={style.socialBlock}>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTelegramPlane} />
        </div>
        <div className={style.textBlock}>
          © {new Date().getFullYear()} - All Rights Reserved
        </div>
        <div className={style.textBlock}>For commercial inquiries</div>
      </div>
    </div>
  );
}

export default Footer;
