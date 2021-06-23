import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './contexts';
import './common/styles/reset.css';
import Header from './components/Header';
import './common/styles/fonts.sass';
import Home from './components/TaskList';

function App () {
  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider>
          <Header />
          <Switch>
            <Route path='/task-list' component={Home} />
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
