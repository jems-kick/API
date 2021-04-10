import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from './components/Apitako';

class App extends React.Component {
  render(){
    return(
      <Router>
      <div>
        <Route path='/' component={API}></Route>
      </div>
      </Router>
    )
  }
}

export default App;
