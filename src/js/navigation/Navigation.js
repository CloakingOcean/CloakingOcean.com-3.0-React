import React, { Component } from 'react';

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleResponsiveClass() {
    var x = document.getElementById("topNav");
    if (!x.classList.contains("responsive")) {
        x.className += " responsive";
    } else {
        x.classList.remove("responsive");
    }
}

class Navigation extends Component {



    render() {
        return (
            <div id="topNav" className="container-fluid topNav" width="100vw">
                <ul className='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>
                    {this.props.linkList}
                </ul>
                
                <a href="javascript:void(0);" className="icon" onClick={toggleResponsiveClass}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        );
    }
}

export default Navigation;
