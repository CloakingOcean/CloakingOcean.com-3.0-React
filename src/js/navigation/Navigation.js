import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <div id="topNav" className='container-fluid' width='100vw'>
                <ul className='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>
                    {this.props.linkList}
                </ul>
                
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        );
    }
}

export default Navigation;
