import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from './pages/main';
import Dashboard from './pages/dashboard';
import Video from './pages/video';
// import Room from './components/Room/Room';

class App extends React.Component{
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/video" component={Video} />
          {/* <Route exact path="/room/:roomId" component={Room} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
