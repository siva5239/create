import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import Registration  from './Registration';

import 'bootstrap/dist/css/bootstrap.min.css';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <Router>
                <ul>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/login"}>LOGIN</Link></li>
                    <li><Link to={"/logout"}>LOGOUT</Link></li>
                    <li><Link to={"/registration"}>REGISTRATION</Link></li>
                  
                </ul>
                <Switch>
                    <Route path="/registration">
                        <Registration/>
                        </Route>
                    <Route path="/login">
                       <Login />

                    </Route>
                    <Route path="/logout">
                       <Logout />

                    </Route>
                    <Route path="/">
                       <Home />

                    </Route>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default Navbar
