import React from 'react';
import { Formik, Field, Form } from 'formik';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faBolt } from '@fortawesome/free-solid-svg-icons';

import PageHeader from '../PageHeader';
import SelectIcon from './SelectIcon';
import coins from '../../common/img/coins.png';
import style from './CreationPage.module.sass';

function CreationPage () {
  return (
    <div className={style.container}>
      <PageHeader text='Task creation' />
      <div className={style.formContainer}>
        <Formik
          initialValues={{
            socialNetwork: '',
            taskType: '',
            projectLink: '',
            executionCost: 20,
            executionAmount: 10,
            isPinned: false,
          }}
          onSubmit={async values => {
            console.log(values);
            alert(JSON.stringify(values));
          }}
        >
          {({ values: networkValues }) => (
            <Form>
              <span className={style.selectionCaption}>
                Select a social network
              </span>
              <div
                className={style.socialBlock}
                role='group'
                aria-labelledby='my-radio-group'
              >
                <label className={style.selectionBlock}>
                  <div className={style.selectionInnerWrapper}>
                    <SelectIcon type='Dribbble' />
                    <span className={style.selectionType}>Dribbble</span>
                    <Field
                      className={style.checkBox}
                      type='radio'
                      name='socialNetwork'
                      value='Dribbble'
                    />
                  </div>
                </label>

                <label className={style.selectionBlock}>
                  <div className={style.selectionInnerWrapper}>
                    <SelectIcon type='Behance' />
                    <span className={style.selectionType}>Behance</span>
                    <Field
                      className={style.checkBox}
                      type='radio'
                      name='socialNetwork'
                      value='Behance'
                    />
                  </div>
                </label>
              </div>

              <div className={style.pageSection}>
                <span className={style.selectionCaption}>Task type</span>
                <div
                  className={style.socialBlock}
                  role='group'
                  aria-labelledby='my-radio-group'
                >
                  <label className={style.selectionBlock}>
                    <div className={style.selectionInnerWrapper}>
                      <SelectIcon type='likes' />
                      <span className={style.selectionType}>Likes</span>
                      <Field
                        className={style.checkBox}
                        type='radio'
                        name='taskType'
                        value='likes'
                      />
                    </div>
                  </label>

                  <label className={style.selectionBlock}>
                    <div className={style.selectionInnerWrapper}>
                      <SelectIcon type='followers' />
                      <span className={style.selectionType}>Followers</span>
                      <Field
                        className={style.checkBox}
                        type='radio'
                        name='taskType'
                        value='followers'
                      />
                    </div>
                  </label>

                  <label className={style.selectionBlock}>
                    <div className={style.selectionInnerWrapper}>
                      <SelectIcon type='comments' />
                      <span className={style.selectionType}>Comments</span>
                      <Field
                        className={style.checkBox}
                        type='radio'
                        name='taskType'
                        value='comments'
                      />
                    </div>
                  </label>

                  <label className={style.selectionBlock}>
                    <div className={style.selectionInnerWrapper}>
                      <SelectIcon type='views' />
                      <span className={style.selectionType}>Views</span>
                      <Field
                        className={style.checkBox}
                        type='radio'
                        name='taskType'
                        value='views'
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className={style.pageSection}>
                <div className={style.selectionCaption}>Project link</div>
                <div
                  className={cx(
                    style.selectionCaption,
                    style.selectionSubcaption
                  )}
                >
                  For example: https://dribbble.com/shots/Example-Name
                </div>
                <Field
                  className={cx(style.input, style.linkInput)}
                  placeholder='Write your link here'
                  name='projectLink'
                  type='text'
                />
              </div>

              <div className={cx(style.pageSection, style.additionalSettings)}>
                <div className={style.extraBlock}>
                  <div className={style.selectionCaption}>Execution cost</div>
                  <div
                    className={cx(
                      style.selectionCaption,
                      style.selectionSubcaption
                    )}
                  >
                    At least 20 coins for execution (50% site comission)
                  </div>
                  <div className={style.input}>
                    <div className={style.inputInnerWrapper}>
                      <FontAwesomeIcon icon={faCoins} />
                      <Field
                        className={style.numInput}
                        name='executionCost'
                        type='number'
                        min='20'
                      />
                    </div>
                  </div>
                </div>
                <div className={style.extraBlock}>
                  <div className={style.selectionCaption}>
                    How much do you need?
                  </div>
                  <div
                    className={cx(
                      style.selectionCaption,
                      style.selectionSubcaption
                    )}
                  >
                    At least 10 executions, a maximum of 1000
                  </div>
                  <div className={style.input}>
                    <div className={style.inputInnerWrapper}>
                      <FontAwesomeIcon icon={faBolt} />
                      <Field
                        className={style.numInput}
                        name='executionAmount'
                        type='number'
                        min='10'
                        max='1000'
                      />
                    </div>
                  </div>
                </div>
                <div className={style.extraBlock}>
                  <div className={style.selectionCaption}>
                    Pin my task to the top
                  </div>
                  <div
                    className={cx(
                      style.selectionCaption,
                      style.selectionSubcaption
                    )}
                  >
                    Additional cost is charged - 500 coins
                  </div>

                  <label className={style.checkboxWrapper}>
                    <Field
                      className={cx(style.checkBox, style.pinToTopCheckBox)}
                      name='isPinned'
                      type='checkBox'
                    />
                  </label>
                </div>
              </div>
              <button className={style.submitBtn} type='submit'>Create task</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreationPage;
