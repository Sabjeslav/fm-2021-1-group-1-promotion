import { actions } from './actions';
import { CONSTANTS } from '../constants/index';

const { THEMES, DEFAULT_THEME } = CONSTANTS;

export const userInitialState = {
  isFetching: false,
  data: {},
  error: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case actions.REQUEST: {
      const {
        payLoad: { userId },
      } = action;
      return { ...userInitialState, isFetching: true, data: { id: userId } };
    }

    case actions.SUCCESS: {
      const { data } = action;
      const {
        data: { id: userId },
      } = state;
      const currentUser = data.find(user => user.id === userId);
      return { ...state, data: currentUser, isFetching: false };
    }

    case actions.ERROR: {
      return { ...state, isFetching: false, error: action.error };
    }
    default:
      throw new Error();
  }
};

export const tasksInitialState = {
  isFetching: false,
  data: [],
  error: null,
};

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case actions.REQUEST: {
      return { ...tasksInitialState, isFetching: true };
    }

    case actions.SUCCESS: {
      const { data } = action;
      return { ...state, data, isFetching: false };
    }

    case actions.UPDATE: {
      const newData = action.payLoad;
      const currentData = state.data;
      const newTask = {
        id: currentData.length,
        ...newData,
      };
      state.data.push(newTask);
    }

    case actions.ERROR: {
      return { ...state, isFetching: false, error: action.error };
    }

    default:
      throw new Error();
  }
};

export const usersListInitialState = {
  isFetching: false,
  data: [],
  error: null,
};

export const usersListReducer = (state, action) => {
  switch (action.type) {
    case actions.REQUEST:
      return { ...usersListInitialState, isFetching: true };

    case actions.SUCCESS:
      const { data } = action;
      return { ...state, data, isFetching: false };

    case actions.ERROR:
      return { ...state, isFetching: false, error: action.error };

    case 'update': {
      const { id, dribbbleLink, behanceLink, email } = action.payload;
      return state.data.map(user => {
        return id === user.id
          ? { ...user, dribbbleLink, behanceLink, email }
          : user;
      });
    }
    default:
      throw new Error();
  }
};

const themeInitialState = {
  theme: DEFAULT_THEME,
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_THEME: {
      localStorage.setItem(
        'theme',
        state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
      );
      return {
        theme: state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
      };
    }
    case actions.RESET_THEME: {
      return { ...themeInitialState };
    }
    default: {
      throw new Error();
    }
  }
};
