import React, { Component } from 'react';
import './App.css';
import InputCEP from './components/inputCEP';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <InputCEP />
      </div>
    );
  }
}

export default App;
