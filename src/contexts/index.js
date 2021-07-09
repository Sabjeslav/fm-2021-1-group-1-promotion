import { createContext } from 'react';
import { CONSTANTS } from '../constants/index';

const { THEMES } = CONSTANTS;

export const CurrentUserContext = createContext(null);
export const UsersListContext = createContext(null);
export const TasksContext = createContext(null);
