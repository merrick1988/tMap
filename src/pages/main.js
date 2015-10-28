import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Header from 'components/header';
import Navigation from 'components/Navigation';


class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Navigation/>
                {this.props.children}
            </div>
        );
    }
}

export default Main;  