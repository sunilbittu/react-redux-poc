import React, { Component } from 'react';
import InstructorApp from './client/router/InstructorApp';
import log from 'loglevel';

class App extends Component {
  render() {
    return ( 
        <InstructorApp /> 
    );
  }
}
export default App;