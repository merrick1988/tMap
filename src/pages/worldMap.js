import React from 'react';
import {RouteHandler, Link} from 'react-router';
import WorldMap from 'components/WorldMap';
import Navigation from 'components/Navigation';

const About = React.createClass({
    render() {
        return (
            <div>
                <Navigation/>
                <WorldMap/>
            </div>
        )
    }
});

export default About;