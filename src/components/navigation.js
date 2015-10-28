import React from 'react';
import {Link} from 'react-router';

const Navigation = React.createClass({
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/map'>Map</Link></li>
                </ul>
            </nav>
        )
    }
});

export default Navigation;