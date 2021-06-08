import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Place from './components/Place/ExactPlace/Place';
import AddPlace from './components/Place/AddPlace/AddPlace';
import EditPlace from './components/Place/EditPlace/EditPlace';
import Profile from './components/Account/Profile/Profile';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile/:email" component={Profile} />
                <Route path="/add-place" component={AddPlace} />
                <Route path="/place/:id" component={Place} />
                <Route path="/edit-place/:id" component={EditPlace} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;