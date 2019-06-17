import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';

import aPlus from "../../images/certifications/a_plus_comp_maintenance.png";
import program from "../../images/certifications/comp_programming.png";
import info from "../../images/certifications/information_tech_pathway.png";
import network from "../../images/certifications/network_fundamentals.png";
import pcpro from "../../images/certifications/pc_pro.png"

var certs = [
    {img: aPlus, alt: "A Plus Certificate"},
    {img: program, alt: "Java Level Two Programming Certificate"},
    {img: info, alt: "Information Technology Pathways Certificate"},
    {img: network, alt: "Network Fundamentals Certificate"},
    {img: pcpro, alt: "PC Pro Certificate"},
];

class ControlledCarousel extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.handleSelect = this.handleSelect.bind(this);
        
        this.state = {
            interval: 5000
        };
    }
    
    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }
    
    render() {
        
        const items = certs.map(item => 
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={item.img}
                    alt={item.alt}
                />
            </Carousel.Item>
        );
        
        const { index, direction } = this.state;
        
        return (
            <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            >
                {items}
            </Carousel>
        );
    }
}

export default ControlledCarousel;