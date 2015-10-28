import React from 'react';
import {Router, Route, Link} from 'react-router';

import Main from 'pages/main';
import About from 'pages/about';
import WorldMap from 'pages/worldMap';

const Routes = React.createClass({
    render() {
        return (
            <Router>
                <Route path="/" component={Main}></Route>
                <Route path="about" component={About}/>
                <Route path="map" component={WorldMap}/>
            </Router>
        )
    }
});

export default Routes;