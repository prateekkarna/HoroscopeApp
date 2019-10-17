import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './home';
import About from './about';
import Contact from './contact';


class Routes extends React.Component{
    render(){
        return(
        <Switch>
          <Route exact path="/" component = {Home}></Route>
          <Route path="/about" component = {About}></Route>         
          <Route path="/contact" component = {Contact}></Route>
        </Switch>)
    }
}

export default Routes;