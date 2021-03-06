import React from 'react';
import './App.css';
// Custom
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import ItemDetail from './ItemDetail';

// React router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Homeee} />
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/gallery" exact component={Gallery}/>
          <Route path="/gallery/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Homeee = () => {
  return (
    <div>
      <h1>home Page</h1>
    </div>
  )
}

export default App;
