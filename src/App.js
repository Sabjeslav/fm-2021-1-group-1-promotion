import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useReducerLoader } from './hooks/index';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { usersListReducer, userReducer, tasksReducer } from 'reducers';

import './common/styles/reset.css';
import './common/styles/fonts.sass';
import './App.sass';

import { TasksContext, CurrentUserContext, UsersListContext } from './contexts';
import TaskListPage from './pages/TaskListPage';
import CreateTaskPage from './pages/CreateTaskPage';
import MyProfilePage from './pages/MyProfilePage';
import TaskHistory from 'components/TaskHistory';

function App () {
  const [user, userDispatch] = useReducerLoader(userReducer, {
    link: '/users.json',
    payLoad: { userId: 2 },
  });
  const [users, usersDispatch] = useReducerLoader(usersListReducer, {
    link: '/users.json',
  });
  const [tasks, tasksDispatch] = useReducerLoader(tasksReducer, {
    link: '/tasks.json',
  });

  return (
    <>
      <BrowserRouter>
        <UsersListContext.Provider value={{ users, usersDispatch }}>
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
                  <Route path='/profile' component={MyProfilePage} />
                  <Route path='/task-history' component={TaskHistory} />
                </Switch>
              </Container>
              <Footer />
            </TasksContext.Provider>
          </CurrentUserContext.Provider>
        </UsersListContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
