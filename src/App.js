import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import pork from './Components/pork';
import beans from './Components/beans';
import welcome from './Components/welcome';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/wordpress/"} exact component={welcome}/>
          <Route path={"/wordpress/pork/"} exact component={pork}/>
          <Route path={"/wordpress/beans/"} exact component={beans}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;