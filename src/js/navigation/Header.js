import React, { Component } from 'react';

import Logo from './Logo';
import Navigationf from './Navigation';

class Header extends Component {
    
    render() {
        var linkList = this.props.pageRefs.map((ref, index) =>
        {
            var current = index === this.props.currentIndex;
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
