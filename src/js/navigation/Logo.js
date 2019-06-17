import React, { Component } from 'react';

import logoImg from "../../images/logo/logo-white.svg";
import { Link } from 'react-router-dom';

class Logo extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <Link to="/"><img className='logo navbar-brand' src={logoImg} alt='Cloaking Ocean Logo'/></Link>
                </div>
            </div>
        );
    }
}

export default Logo;
