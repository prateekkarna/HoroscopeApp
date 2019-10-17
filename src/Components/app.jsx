import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import Routes from './routes.jsx';
import NavigationBar from './NavigationBar/navBar.jsx'

class App extends React.Component{
    render() {
        return (
           <Router>            
           {/* <div>
              <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              </ul>           
           </div> */}
           < NavigationBar/>
           <div>
              <Routes/>
           </div>
           </Router>
        )
     }
}

export default App;