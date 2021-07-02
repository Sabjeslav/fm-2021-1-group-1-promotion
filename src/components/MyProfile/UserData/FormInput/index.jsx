import React from 'react';
import cx from 'classnames';
import style from './FormInput.module.sass';

export default function FormInput ({
  field,
  form: { touched, errors },
  ...props
}) {
  return (
    <input
      {...field}
      {...props}
      className={cx(style.input, {
        [style.invalidInput]: touched[field.name] && errors[field.name],
      })}
    />
  );
}
