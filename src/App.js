import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthComponent from './Containers/Auth/AuthComponent';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route path="/" exact component={AuthComponent}></Route>
        </BrowserRouter>
    );
  }
}

export default App;
