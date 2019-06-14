import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import LinkItem from './LinkItem';
import Header from './Header';

class AppRouter extends Component {
  
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header linkList={this.props.pageRefs} />
                        <Routes pageRefs={this.props.pageRefs}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppRouter;