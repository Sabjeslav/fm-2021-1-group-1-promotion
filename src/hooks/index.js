import {useEffect, useReducer } from 'react';
import { userReducer, userInitialState } from '../reducers/index';
import { actions } from '../reducers/actions';
export function useUser(src){
  const [user, userDispatch] = useReducer(userReducer, userInitialState);
    useEffect(() => {
      userDispatch({
        type: actions.REQUEST,
      });
      fetch(src)
        .then(res => res.json())
        .then(data => {
          const author = data.filter(item => item.id === 2);
          userDispatch({
            type: actions.SUCCESS,
            data: author[0]
          });
        })
        .catch(error => userDispatch({ type: actions.ERROR, error }));
    }, []);
    return {user, userDispatch}
}