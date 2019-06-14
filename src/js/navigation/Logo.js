import React, { Component } from 'react';

import logoImg from "../../images/logo/logo-white.svg";

class Logo extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <a href='index.html'><img className='logo navbar-brand' src={logoImg} alt='Cloaking Ocean Logo'/></a>
                </div>
            </div>
        );
    }
}

export default Logo;
