import * as yup from 'yup'
export const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-ZА-ЯЁ][a-zа-яё]{0,1477}$/, 'First letter - upper')
  .required();
export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required();
export const PASSWORD_SCHEMA = yup
  .string()
  .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-]).{8,}$/,"Password must contain upper and lowwer symbols")
  .required();
export const SIGN_IN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

