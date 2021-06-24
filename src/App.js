import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext, TasksContext } from './contexts';
import './common/styles/reset.css';
import Header from './components/Header';
import './common/styles/fonts.sass';
import TaskList from './components/TaskList';

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
          <Switch>
            <Route path='/task-list' component={TaskList} />
          </Switch>
        </TasksContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
