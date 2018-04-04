import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';



class Main extends Component {
  render(){
    return(
        <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/profile' component={Profile}/>
            </Switch>
        </main>
    );
  }
}

export default Main;
