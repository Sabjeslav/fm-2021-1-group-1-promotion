import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useTasks, useUser, useUsers } from './hooks/index';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

import './common/styles/reset.css';
import './common/styles/fonts.sass';

import { TasksContext, CurrentUserContext, UsersListContext } from './contexts';
import TaskListPage from './pages/TaskListPage';
import CreateTaskPage from './pages/CreateTaskPage';
import MyProfilePage from './pages/MyProfilePage';

function App () {
  const { user, userDispatch } = useUser('/users.json', 2);
  const { users, usersDispatch } = useUsers('/users.json');
  const { tasks, tasksDispatch } = useTasks('/tasks.json');
  if (users.isFetching) return <div>Loading data</div>;
  else if (users.error) return <div>Error</div>;
  else {
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
}

export default App;
