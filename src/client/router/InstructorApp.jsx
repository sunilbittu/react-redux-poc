import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'; 
import LandingPage from '../pages/LandingPage'; 
import LoginPage from '../pages/login/LoginPage';
import AccessDenied from '../pages/login/AccessDenied';
import LocationPage from '../pages/locationIdentify';
import DriverEnroute from '../pages/directions';


class InstructorApp extends Component {
   /*  constructor(props) {
        super(props)
        
    } */

     render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={"/"}exact component={LandingPage} />
                     <Route path={"/login"} exact component={LoginPage} />
                     <Route path={"/accessdenied"} exact component={AccessDenied} />
                    <Route path={"/locationidentify"} exact component={LocationPage} />
                    <Route path={"/directions"} exact component={DriverEnroute} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default InstructorApp