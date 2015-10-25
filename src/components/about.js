import React from 'react';
import {RouteHandler, Link} from 'react-router';


const About = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});

export default About;