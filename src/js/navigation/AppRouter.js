import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from './Header';
import Routes from './Routes';

class AppRouter extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header pageRefs={this.props.pageRefs}/>
                        <Routes pageRefs={this.props.pageRefs}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppRouter;
