import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './Components/SidebarComponent';
import Home from './Components/HomeComponent';
import About from './Components/AboutComponent';

function Main() {
    
    return (
        <React.Fragment>
            <Sidebar />
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        </React.Fragment>
    )
}

export default Main
