import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faBolt } from '@fortawesome/free-solid-svg-icons';

import PageHeader from '../PageHeader';
import SelectIcon from './SelectIcon';
import style from './CreationPage.module.sass';
import { TasksContext, CurrentUserContext } from 'contexts';

function CreationPage () {
  const {
    tasks: { data },
    tasksDispatch,
  } = useContext(TasksContext);

  const { user, userDispatch } = useContext(CurrentUserContext);

  const [balanceError, setBalanceError] = useState(null);

  return (
    <div className={style.container}>
      <PageHeader text='Task creation' />
      <div className={style.formContainer}>
        <Formik
          initialValues={{
            socialNetwork: '',
            taskType: '',
            postLink: '',
            executionPrice: 20,
            targetExecutions: 10,
            isPinned: false,
          }}
          onSubmit={async (values, actions) => {
            const coinsAmount =
              values.executionPrice * values.targetExecutions +
              values.isPinned * 500;
            if (user.data.balance < coinsAmount) {
              setBalanceError('Not enough coins to create a task');
              throw new Error('Not enough coins to create a task');
            }
            console.log(coinsAmount);
            tasksDispatch({
              type: 'DATA_TASKS_UPDATE',
              payLoad: {
                authorId: user.data.id,
                createdAt: Date.now(),
                status: 'ACTIVE',
                currentExecutions: 0,
                socialNetwork: values.socialNetwork,
                taskType: values.taskType,
                postLink: values.postLink,
                executionPrice: values.executionPrice,
                targetExecutions: values.targetExecutions,
                isPinned: values.isPinned,
              },
            });
            userDispatch({
              type: 'DATA_USER_UPDATE',
              payLoad: {
                coinsAmount,
              },
            });
            setBalanceError(null);
            actions.resetForm();
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
                      value='DRIBBBLE'
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
                      value='BEHANCE'
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
                        value='LIKES'
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
                        value='FOLLOWERS'
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
                        value='COMMENTS'
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
                        value='VIEWS'
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
                  name='postLink'
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
                        name='executionPrice'
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
                        name='targetExecutions'
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
              <button className={style.submitBtn} type='submit'>
                Create task
              </button>
              <div className={style.errorBlock}>{balanceError}</div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreationPage;
