import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import LinkItem from './LinkItem';

var currentIndex = 0;

class AppRouter extends Component {
  
  index = 0;
  
  render() {
    var linkList = this.props.pageList.map((link, index) =>
    {
        var current = index === currentIndex;
        return (<LinkItem current={current} link={link} />);
    });
    
    var routes = this.props.pageList.map(list => {
        if (list.url == '')  {
            
        }  
    }
    );
    
    var Home = this.props.home;
    var Java = this.props.java;
    var Unity = this.props.unity;
    var Web = this.props.web;
    var Gaming = this.props.gaming;
    var Music = this.props.music;
    
    var header = 
    <nav className='navbar bg-dark navbar-dark navbar-expand'>
        <div className='container-fluid'>
            <div className='navbar-header'>
                <a href='index.html'><img className='logo navbar-brand' alt='Cloaking Ocean Logo'/> src='images/logo/logo-white.svg'></a>
            </div>
        </div>
        <div className='container-fluid' width='100vw'>"
            <ul className='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>
                {linkList}
            </ul>
        </div>
    </nav>;
    
    return (
        <Router>
            <div>
                {header}
                
                <Route path="/" exact component={Home} />
                <Route path="/java/" component={Java}/>
                <Route path="/unity/" component={Unity} />
                <Route path="/web/" component={Web} />
                <Route path="/gaming/" component={Gaming} />
                <Route path="/music" exact component={Music} />
            </div>
        </Router>
    );
  }
}

export default AppRouter;
/*
function writeHeader() {
    let $headerString = "" +
    "<nav className='navbar bg-dark navbar-dark navbar-expand'>" +
        "<div className='container-fluid'>" +
            "<div className='navbar-header'>" +
                "<a href='index.html'><img className='logo navbar-brand' src='images/logo/logo-white.svg'></a>" +
            "</div>" +
        "</div>" +
        "<div className='container-fluid' style='width: 100vw;'>" +
            "<div className='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>";

    $headerString += addLinksForEachPage() +

            "</div><!-- navbar-nav -->"
        "</div><!-- container-fluid -->" +
    "</nav><!-- nav-bar -->"

    let $header = $($headerString);
    $("header").html($header);
}

function addLinksForEachPage() {
    let $string = "";
    for (let i = 0; i < links.length; i++) {
        let url = links[i].url;
        let name = links[i].name;

        if (i == currentIndex) {
            $string += "<a className='nav-item nav-link disabled' href='#'>" + name +  "</a>";
        } else {
            $string += "<a className='nav-item nav-link' href='" + url + "'>" + name +  "</a>";
        }
    }
    return $string;
}

writeHeader();

function addSpaces($source) {
    var searchWord = ' ';
    var regEx = new RegExp("(" + searchWord + ")(?!([^<]+)?>)", "gi");
    var output = $source.replace(regEx, "&nbsp;");
}
*/