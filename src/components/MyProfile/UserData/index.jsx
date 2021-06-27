import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { USER_DATA_SCHEMA } from '../../../utils/validationSchemas';
import FormInput from './FormInput';
import style from './UserData.module.sass';
function UserData ({ data }) {
  const { dribbbleLink, behanceLink, email } = data;
  const initialValues = {
    dribble: dribbbleLink,
    behance: behanceLink,
    email: email,
    primaryPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={USER_DATA_SCHEMA}>
        {formikProps => {
          return (
            <Form className={style.form}>
              <label className={style.labell}>
                <p className={style.labelText}>Dribble link</p>
                <div className={style.fieldWrapper}>
                  <Field
                    type='text'
                    component={FormInput}
                    name='dribble'
                    placeholder='Dribble link'
                  />
                </div>

                <ErrorMessage name='dribble' component='span' />
              </label>

              <label className={style.label}>
                <p className={style.labelText}>Behance Link</p>
                <div className={style.fieldWrapper}>
                  <Field
                    type='text'
                    component={FormInput}
                    name='behance'
                    placeholder='behance'
                  />
                </div>

                <ErrorMessage name='behance' component='span' />
              </label>

              <label className={style.label}>
                <p className={style.labelText}>E-Mail</p>
                <div className={style.fieldWrapper}>
                  <Field
                    type='text'
                    component={FormInput}
                    name='email'
                    placeholder='email'
                  />
                </div>
                <ErrorMessage name='email' component='span' />
              </label>
              <p className={style.text}>Password menagement</p>
              <label className={style.label}>
                <p className={style.labelText}>Primary password</p>
                <div className={style.fieldWrapper}>
                  <Field
                    type='text'
                    component={FormInput}
                    name='primaryPassword'
                    placeholder='Primary password'
                  />
                </div>
                <ErrorMessage name='primaryPassword' component='span' />
              </label>

              <label className={style.label}>
                <p className={style.labelText}>New password</p>
                <div className={style.fieldWrapper}>
                  <Field
                    type='text'
                    component={FormInput}
                    name='newPassword'
                    placeholder='New password'
                  />
                </div>
                <ErrorMessage name='newPassword' component='span' />
              </label>

              <label className={style.label}>
                <p className={style.labelText}>Confirm password</p>
                <div className={style.fieldWrapper}>
                  <Field
                    type='text'
                    component={FormInput}
                    name='confirmPassword'
                    placeholder='Confirm password'
                  />
                </div>
                <ErrorMessage name='confirmPassword' component='span' />
              </label>
              <Field type='submit' className={style.submitBtn} value='Save changes' />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default UserData;
