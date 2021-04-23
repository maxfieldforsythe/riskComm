import './bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Switch , withRouter} from "react-router-dom";
import NavBar from './NavBar.js';
import React, {Component, memo, useState , Fragment, Button} from 'react'

import Quiz from './Quiz.js'
import Home from './Home.js'



class App extends Component {
  render() {
    return(
      <React.Fragment>
          <Router>
          <NavBar />
            <Switch>
              <Route exact path="/risk" component={withRouter(Home)} />
              <Route path="/quiz" component={withRouter(Quiz)} />
            </Switch>
          </Router>
      </React.Fragment>
    )
  }
}

export default App;