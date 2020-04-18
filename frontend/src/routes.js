import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Cart from './pages/Cart/index';
import About from './pages/About/index';
import Gallery from './pages/Gallery/index';
import Contact from './pages/Contact/index';
import Checkout from './pages/Checkout/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact
                    render={props => <Home {...props} />} />

                <Route path='/gallery'
                    render={props => <Gallery {...props} />} />

                <Route path='/checkout'
                    render={props => <Checkout {...props} />} />

                <Route path='/cart' component={Cart} />
                <Route path='/contact' component={Contact} />
                <Route path='/about-us' component={About} />
            </Switch>
        </BrowserRouter>
    );
}