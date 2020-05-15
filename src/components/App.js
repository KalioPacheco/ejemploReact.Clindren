import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Welcome from '../pages/Welcome';
import Api from '../pages/Api';
import Temp from '../pages/temporales';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/Api" component={Api}></Route>
                    <Route exact path="/temp" component={Temp}></Route>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

