import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Switch, Route} from 'react-router-dom';

import ProductHeader from "./ProductHeader";
import Catalog from "../containers/Catalog";
import Cart from "../containers/Cart";
import NotFound from "./NotFound";

const history = createBrowserHistory();

const Main = () => (
            <main className="container">
                <Router history={history}>
                    <ProductHeader />
                    <Switch>
                        <Route path="/" exact component={Catalog} />
                        <Route path="/:id" component={Cart} />
                        <Route path="*">
                            {/*<NotFound />*/}
                            <h1>Page not found</h1>
                        </Route>
                    </Switch>
                </Router>
            </main>
);

export default Main;

