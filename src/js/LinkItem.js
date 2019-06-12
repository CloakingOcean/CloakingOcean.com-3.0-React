import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class LinkItem extends Component {
    
    render() {
        var url = this.props.link.url;
        var name = this.props.link.name;
        var current = this.props.current;
        
        if (current === true) {
            return (
                <li key={name + "-list-item"}>
                    <a key={name} className='nav-item nav-link disabled' href='#'>
                        {name}
                    </a>
                </li>
            );
        } else {
            return (
                <li key={name + "-list-item"}>
                    <Link to={url} className='nav-item nav-link' key={name}>
                        {name}
                    </Link>
                </li>
            );
        }
    }
}

export default LinkItem;