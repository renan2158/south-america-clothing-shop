import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Cart from './pages/Cart/index';
import Gallery from './pages/Gallery/index';
import Contact from './pages/Contact/index';
import Checkout from './pages/Checkout/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/gallery'
                    render={props => <Gallery {...props} />} />
                <Route path='/cart' component={Cart} />
                <Route path='/checkout' component={Checkout} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}