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
  .oneOf([yup.ref('password')], 'Passwords must match');

export const USER_DATA_SCHEMA = yup.object({
  dribble: URL_SCHEMA,
  behance: URL_SCHEMA,
  email: EMAIL_SCHEMA,
  primaryPassword: PASSWORD_SCHEMA,
  newPassword: PASSWORD_SCHEMA,
  confirmPassword: PASSWORD_CONFIRM_SCHEMA,
});

export const NEW_TASK_SCHEMA = yup.object({
  socialNetwork: yup.string().required('Select a social network'),
  taskType: yup.string().required('Select task type'),
  postLink: yup.string().required('Link is required field'),
  executionPrice: yup
    .number()
    .min(20, 'Select at least 20 coins for execution')
    .max(1000, '1000 is a maximum execution cost')
    .required('Enter execution cost'),
  targetExecutions: yup
    .number()
    .min(10, 'Select at least 10 executions')
    .max(1000, '1000 is a maximum executions')
    .required('Enter executions amount'),
  isPinned: yup.boolean(),
});
