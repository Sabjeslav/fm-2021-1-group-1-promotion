import { useEffect, useReducer } from 'react';
import {actions} from '../reducers/actions'

const defaultInitialState = {
  isFetching: false,
  data: [],
  error: null,
};

export function useReducerLoader (
  reducer,
  options = { payLoad: {}, link: null },
  initialState = defaultInitialState
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: actions.REQUEST,
      payLoad: options.payLoad,
    });
    fetch(options.link)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: actions.SUCCESS,
          data,
        })
      )
      .catch(error =>
        dispatch({
          type: actions.ERROR,
          error,
        })
      );
  }, [options.link]);

  return [state, dispatch];
}

