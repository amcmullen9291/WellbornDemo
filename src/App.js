import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import stains from './Components/stains';
import glazes from './Components/glazes';
import welcome from './Components/welcome';
import paints from './Components/paints';
import melamine from './Components/melamine';
import laminates from './Components/laminates';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/wordpress/"} exact component={welcome}/>
          <Route path={"/wordpress/stains/"} exact component={stains}/>
          <Route path={"/wordpress/glazes/"} exact component={glazes}/>
          <Route path={"/wordpress/paints/"} exact component={paints}/>
          <Route path={"/wordpress/laminates/"} exact component={laminates}/>
          <Route path={"/wordpress/melamine/"} exact component={melamine}/>
          <Redirect to={"/wordpress/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;