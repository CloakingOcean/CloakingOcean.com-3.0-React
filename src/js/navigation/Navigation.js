import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <div className='container-fluid' width='100vw'>
                <ul className='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>
                    {this.props.linkList}
                </ul>
            </div>
        );
    }
}

export default Navigation;
