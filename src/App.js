import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useTasks, useUser } from './hooks/index';
import Header from './components/Header';
import Container from './components/Container';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

import './common/styles/reset.css';
import './common/styles/fonts.sass';

import { ThemeContext, TasksContext, CurrentUserContext } from './contexts';
import CreationPage from './components/CreationPage';

function App () {
  const { user, userDispatch } = useUser('/users.json', 2);
  const { tasks, tasksDispatch } = useTasks('/tasks.json');
  return (
    <>
      <BrowserRouter>
        <CurrentUserContext.Provider value={{ user, userDispatch }}>
          <TasksContext.Provider value={{ tasks, tasksDispatch }}>
            <Header />
            <Container>
              <Switch>
                <Route exact path='/'>
                  {' '}
                  <Redirect to='/task-list' />{' '}
                </Route>
                <Route path='/task-list' component={TaskList} />
                <Route path='/newtask' component={CreationPage} />
              </Switch>
            </Container>
            <Footer />
          </TasksContext.Provider>
        </CurrentUserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
