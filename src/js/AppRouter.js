import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import LinkItem from './LinkItem';
import Logo from './Logo';
import Navigation from './Navigation';

class AppRouter extends Component {
  
  render() {
      
    var linkList = this.props.pageRefs.map((ref, index) =>
    {
        var current = index === this.props.currentIndex;
        return (<LinkItem key={ref.name} current={current} link={ref} />);
    });
    
    var header = 
    <nav className='navbar bg-dark navbar-dark navbar-expand'>
        
        <Logo />
        
        <Navigation linkList={linkList} />
        
    </nav>;
    
    var currentPage;
    
    var routes = this.props.pageRefs.map((ref, index) => {
        
        // Assigns currentPage using currentIndex
        if (this.props.currentIndex === index) {
            currentPage = ref.page;
        }
        
        // Creates Route elements for each page.
        if (index === 0) {
            return (<Route key={ref.name + "-route"} path="/" exact component={ref.page} />);
        } else {
            return (<Route key={ref.name + "-route"} path={ref.url} component={ref.page}/>);
        }
    });
    
    return (
        <div>
            <Router>
                <div>
                    {header}
                    {routes}
                </div>
            </Router>
        </div>
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