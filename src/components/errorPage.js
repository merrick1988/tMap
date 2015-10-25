import React from 'react';
import {RouteHandler, Link} from 'react-router';

class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Example345</h1>
                <Link to='example'>ErrorPage</Link>
                <RouteHandler/>
            </div>
        );
    }
}

export default ErrorPage;