import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Header from 'components/header';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <nav>
                    <ul>
                        <li><Link to='/'>+ New</Link></li>
                        <li><Link to='/about'>Map</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default Main;  