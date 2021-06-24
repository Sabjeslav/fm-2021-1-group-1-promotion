import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useUser } from './hooks/index';
import Header from './components/Header';
import Container from './components/Container';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './common/styles/reset.css';
import './common/styles/fonts.sass';

import { ThemeContext, TasksContext, CurrentUserContext } from './contexts';

function App () {
  const { user, userDispatch } = useUser('/users.json');
  const [tasks, setTasks] = useState();
  const loadData = () =>
    fetch('./tasks.json')
      .then(res => res.json())
      .then(data => setTasks(data));
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <CurrentUserContext.Provider value={{ user, userDispatch }}>
          <TasksContext.Provider value={{ tasks }}>
            <Header />
            <Container>
              <Switch>
                <Route exact path='/'>
                  {' '}
                  <Redirect to='/task-list' />{' '}
                </Route>
                <Route path='/task-list' component={TaskList} />
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
