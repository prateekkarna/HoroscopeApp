import React from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import Routes from './routes.jsx';
class App extends React.Component{
    render() {
        return (
           <Router>            
           <div>
              <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              </ul>           
           </div>
           <div>
              <Routes/>
           </div>
           </Router>
        )
     }
}

export default App;