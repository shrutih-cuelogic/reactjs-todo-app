import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Topics from './Topics';
import About from './About';
import Contact from './Contact';


class Main extends Component {
    render(){
      return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/topics' component={Topics}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
        </Switch>
      );
    }
}

export default Main