import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Solo from './Solo';
import Duo from './Duo';
import Squad from './Squad';


class Main extends Component {

    render() {

        return (
            <div className="projects container">
                <Route component={Solo} />
                <Route component={Duo} />
                <Route component={Squad} />
            </div>
        );
    }
}

export default Main;