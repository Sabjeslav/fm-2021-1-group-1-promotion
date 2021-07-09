import { useReducer } from 'react';
import { themeReducer } from 'reducers';
import { actions } from 'reducers/actions';
import { CONSTANTS } from '../constants/index';

const initialState = {
  theme: CONSTANTS.DEFAULT_THEME,
};

export default function useTheme () {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const toggleTheme = () => {
    dispatch({ type: actions.TOGGLE_THEME });
  };
  const resetTheme = () => {
    dispatch({ type: actions.RESET_THEME });
  };

  return { theme: state.theme, toggleTheme, resetTheme };
}
