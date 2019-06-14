import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Routes extends Component {

    render() {

        var routes = this.props.pageRefs.map((ref, index) => {

            // Creates Route elements for each page.
            if (index === 0) {
                return (<Route key={ref.name + "-route"} path="/" exact component={ref.page} />);
            }
            else {
                return (<Route key={ref.name + "-route"} path={ref.url} component={ref.page}/>);
            }
        });

        return (routes);
    }
}

export default Routes;
