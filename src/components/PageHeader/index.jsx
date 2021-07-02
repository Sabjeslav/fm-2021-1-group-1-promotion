import React from 'react';
import style from './PageHeader.module.sass';
import PropTypes from 'prop-types';

function PageHeader ({ text = 'Not set' }) {
  return <h1 className={style.pageName}>{text}</h1>;
}

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeader;
