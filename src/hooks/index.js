import { useEffect, useReducer } from 'react';
import {
  userReducer,
  userInitialState,
  tasksInitialState,
  tasksReducer,
} from '../reducers/index';
import { actions } from '../reducers/actions';
export function useUser (src, userId) {
  const [user, userDispatch] = useReducer(userReducer, userInitialState);
  useEffect(() => {
    userDispatch({
      type: actions.REQUEST,
    });
    fetch(src)
      .then(res => res.json())
      .then(data => {
        const author = data.filter(item => item.id === userId);
        userDispatch({
          type: actions.SUCCESS,
          data: author[0],
        });
      })
      .catch(error => userDispatch({ type: actions.ERROR, error }));
  }, []);
  return { user, userDispatch };
}

export function useTasks (src) {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, tasksInitialState);

  useEffect(() => {
    tasksDispatch({
      type: actions.REQUEST,
    });
    fetch(src)
      .then(res => res.json())
      .then(data => {
        tasksDispatch({
          type: actions.SUCCESS,
          data,
        });
      })
      .catch(error => tasksDispatch({ type: actions.ERROR, error }));
  }, []);

  return { tasks, tasksDispatch };
}
