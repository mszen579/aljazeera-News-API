import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";//this is for routing
import Home from './Home';



const Nav = () => (
  <Router>
    <div>
      <ul className='nav-list'>
        <li className='nav-li'>
          <Link className='nav-li' to="/">Home</Link>
        </li>
      </ul>

      <hr />
      
          <Switch> 
      <Route exact path="/" component={Home} />

      <Route exact render={function () {
              return <p>404 this page is not found</p>
            }} />
          </Switch> 
    </div>
  </Router>
);



export default Nav;