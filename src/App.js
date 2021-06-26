import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useTasks, useUser } from './hooks/index';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

import './common/styles/reset.css';
import './common/styles/fonts.sass';

import { TasksContext, CurrentUserContext } from './contexts';
import TaskListPage from './pages/TaskListPage';
import CreateTaskPage from './pages/CreateTaskPage';

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
                  <Redirect to='/task-list' />
                </Route>
                <Route path='/task-list' component={TaskListPage} />
                <Route path='/newtask' component={CreateTaskPage} />
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
