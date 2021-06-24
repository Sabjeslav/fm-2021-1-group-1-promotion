import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './common/styles/reset.css';
import './common/styles/fonts.sass';


import { ThemeContext, TasksContext } from './contexts';

function App () {
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
        <TasksContext.Provider value={{ tasks }}>
          <Header />
          <Container>
            <Switch>
              <Route path='/task-list' component={TaskList} />
            </Switch>
          </Container>
          <Footer />
        </TasksContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
