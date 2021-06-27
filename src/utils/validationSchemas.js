import * as yup from 'yup';
export const URL_SCHEMA = yup
  .string()
  .matches(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    'Wrong link'
  )
  .required();
export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required();
export const PASSWORD_SCHEMA = yup
  .string()
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-]).{8,}$/,
    'Password must contain upper and lowwer symbols'
  );
export const PASSWORD_CONFIRM_SCHEMA = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match');

export const USER_DATA_SCHEMA = yup.object({
  dribble: URL_SCHEMA,
  behance: URL_SCHEMA,
  email: EMAIL_SCHEMA,
  primaryPassword: PASSWORD_SCHEMA,
  newPassword: PASSWORD_SCHEMA,
  confirmPassword: PASSWORD_CONFIRM_SCHEMA,
});
