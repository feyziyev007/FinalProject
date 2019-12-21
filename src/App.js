import React from 'react';
import './App.css';
import Header from './Components/Header/index';
import PageCart from './Components/PageCart';
import PageHP from './Components/PageHP';
import PagePDP from './Components/PagePDP';
import PagePLP from './Components/PagePLP/pagePLP';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
    console.log('props from APP = ', props);

  return (
    <Router>
      <Header />
        <Switch>
        <Route exact path="/" component={PageHP} />
        <Route exact path="/cart" component={PageCart} />
        <Route exact path="/detail/:id" component={PagePDP} />
        <Route exact path="/list" component={PagePLP} />
      </Switch>
    </Router>
  );
}

export default App;

