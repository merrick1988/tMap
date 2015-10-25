import React from 'react';
import {Router, Route, Link} from 'react-router';

import Main from 'components/main';
import About from 'components/about';
import ErrorPage from 'components/errorPage';

const Routes = React.createClass({
    render() {
        return (
            <Router>
                <Route path="/" component={Main}>
                    <Route path="about" component={About}/>
                </Route>
            </Router>
        )
    }
});

export default Routes;