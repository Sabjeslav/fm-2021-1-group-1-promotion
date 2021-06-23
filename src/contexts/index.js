import { createContext } from 'react';

export const CurrentUserContext = createContext(null);
export const UsersListContext = createContext(null);
export const TasksContext = createContext(null);

if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');
export const ThemeContext = createContext(localStorage.getItem('theme'));
