import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.yourname ='ammy';
    this.state = {};
  }
  sayhello(name){
    return 'hello '+ name;
  }
  render() {
    return (
      <div className="App">
        <h2>just some sample data: {this.sayhello('sammy')}</h2>
      </div>
    );
  }
}

export default App;
