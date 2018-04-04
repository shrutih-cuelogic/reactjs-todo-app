import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

class App extends Component    {
  render(){
    return(
		<div>
			<h1>Hello app</h1>
			<Header />
			<Main />
		</div>
    );
  }
}

export default App;