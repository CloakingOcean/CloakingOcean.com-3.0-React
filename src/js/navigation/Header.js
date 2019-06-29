import React, { Component } from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import LinkItem from './LinkItem';

class Header extends Component {

    render() {
        var linkList = this.props.pageRefs.map((ref) => {
            return (<LinkItem key={ref.name} current={current} link={ref} />);
        });

        return (
            <nav className='navbar bg-dark navbar-dark navbar-expand'>
                
                <Logo />
                
                <Navigation linkList={linkList} />
            
            </nav>
        );
    }
}
export default Header;
