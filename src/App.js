import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cards from './components/Cards';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path="/cards" component={Cards} exact />
        <Route path="/cards/add" component={AddCard} />
        <Route path="/cards/:id/edit" component={EditCard} />
      </Fragment>
    </Router>
  );
};

export default App;
