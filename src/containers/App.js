import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Main from '../components/Main';



class App extends Component {
  render(){
    return(
		<div className='app'>
      <h1>React Router Demo1</h1>
      <Navigation />
      <Main />
		</div>
    );
  }
}
export default App;