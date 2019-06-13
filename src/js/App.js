import React, { Component } from 'react';

import Home from './Home';
import Java from './Java';
import Unity from './Unity';
import Web from './Web';
import Gaming from './Gaming';
import Music from './Music';
import AppRouter from './AppRouter';

var currentIndex = 1;

export function updateCurrentIndex(index) {
    currentIndex = index;
}

const pageRefs = [
    {url: "/", name: "Home", page: Home},
    {url: "/java/", name: "Java", page: Java},
    {url: "/unity/", name: "Unity", page: Unity},
    {url: "/web/", name: "Web", page: Web},
    {url: "/gaming/", name: "Gaming", page: Gaming},
    {url: "/music/", name: "Music", page: Music},
];

class App extends Component {
    
    
    
    render() {
        return (
            <AppRouter currentIndex={currentIndex} pageRefs={pageRefs} />
        );
    }
    
}

export default App;