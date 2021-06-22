import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './common/styles/reset.css';
import Header from './components/Header';
import './common/styles/fonts.sass';
function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
