import React, { Component } from 'react';

import Home from './pages/Home';
import Java from './pages/Java';
import Unity from './pages/Unity';
import Web from './pages/Web';
import Gaming from './pages/Gaming';
import Music from './pages/Music';
import AppRouter from './navigation/AppRouter';

var currentIndex = 1;

export function updateCurrentIndex(index) {
    currentIndex = index;
}

const pageRefs = [
    { url: "/", name: "Home", page: Home },
    { url: "/java/", name: "Java", page: Java },
    { url: "/unity/", name: "Unity", page: Unity },
    { url: "/web/", name: "Web", page: Web },
    { url: "/gaming/", name: "Gaming", page: Gaming },
    { url: "/music/", name: "Music", page: Music },
];

class App extends Component {



    render() {
        return (
            <AppRouter currentIndex={currentIndex} pageRefs={pageRefs} />
        );
    }

}

export default App;
