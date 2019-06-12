import React, { Component } from 'react';

import Home from './Home';
import Java from './Java';
import Unity from './Unity';
import Web from './Web';
import Gaming from './Gaming';
import Music from './Music';
import AppRouter from './AppRouter';

const pageList = [
    {url: "/", name: "Home"},
    {url: "/java/", name: "Java"},
    {url: "/unity/", name: "Unity"},
    {url: "/web/", name: "Web"},
    {url: "/gaming/", name: "Gaming"},
    {url: "/music/", name: "Music"},
];

class App extends Component {
    
    
    
    render() {
        return (
            <AppRouter pageList={pageList} />
        );
    }
    
}

export default App;