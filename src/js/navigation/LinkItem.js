import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkItem extends Component {

    render() {
        var url = this.props.link.url;
        var name = this.props.link.name;

        return (

            <li key={name + "-list-item"}>
                <Link to={url} className='nav-item nav-link'>
                    {name}
                </Link>
            </li>

        );
    }
}

export default LinkItem;
