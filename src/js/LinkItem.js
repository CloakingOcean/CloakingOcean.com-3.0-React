import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class LinkItem extends Component {
    
    render() {
        var url = this.props.link.url;
        var name = this.props.link.name;
        var current = this.props.current;
        
        // if (current === true) {
        //     return (
        //         <li key={name + "-list-item"}>
        //             <Link to="/" className='nav-item nav-link text-muted' disabled='disabled'>
        //                 {name}
        //             </Link>
        //         </li>
        //     );
        // } else {
            
            return (
                
                <li key={name + "-list-item"}>
                    <Link to={url} className='nav-item nav-link'>
                        {name}
                    </Link>
                </li>
                
            );
        // }
    }
}

export default LinkItem;

// <li key={name + "-list-item"}>