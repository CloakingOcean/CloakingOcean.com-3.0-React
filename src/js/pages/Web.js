import React, { Component } from 'react';

import cssTut from "../../images/examples/Web Development/1/500x500.png";
import exitium from "../../images/examples/Web Development/2/500x500.png";
import cloaking from "../../images/examples/Web Development/3/500x500.png";

class Web extends Component {

    render() {
        return (
            <div>
                {/* Breakpoint debugging tool to be filled in with javascript from writeBreakpoint() method */}
                <header className="header" data-id="3">
                    {/* To be filled in with javascript from writeHeader() method */}
                </header>
                
                <div className="container">
                    <div className="row">
                        <h1>Web Development | A Vast and Complex Industry</h1>
                    </div>
                    <section>
                        <h2>Web Development Introduction</h2>
                        <p>
                            Similarly to my Java education, I learned much from{' '}
                            <a href="https://www.youtube.com/watch?v=Mp0f0zTPLec&list=PL081AC329706B2953" target="_blank" rel="noopener noreferrer">TheNewBoston</a>! From these
                            tutorials, I've learned that basically, HTML is the core content, CSS is the styling and layout of the content, and JavaScript
                            allows your website to be smart and interactive. These are the three major components that make a modern webpage.
                        </p>
                    </section>
                    <section>
                        <h2>TheNewBoston Tutorial Project (Exitium)</h2>
                        <p>
                            As you'll see in the upcoming examples, my usage of JavaScript is scarce in the earlier days of my education. This first
                            website was a result of following TheNewBoston's web development tutorial. At this point in time, I had a relatively strong
                            knowledge of HTML and was learning the different options of CSS. This was the first time I was able to make a sidebar using
                            CSS! I've uploaded the{' '}<a href="https://drive.google.com/open?id=14dFUtIx67lfLYtP1F7ZmmBviN4Zqgen3" target="_blank" rel="noopener noreferrer">Website's Files</a> as well.
                        </p>
                    </section>
                    
                    <img className="centered-img" src={cssTut} alt="Final Exitium Webpage"/>
                    
                    <section>
                        <h2>Exitium.org</h2>
                        <p>
                            Exitium.org was a small passion project I was creating for my friends. It was a chance to actually create something with the
                            skills I've acquired as well as a lot of fun! Exitium was the name of our group when we were younger. As you will also
                            see, I experimented with embedding games from other websites offering HTML code into my own page. I was planning to have a game
                            showcase every week! You can see the{' '}<a href="https://drive.google.com/open?id=1HffFgEwkmTAW2FOcHiPFKyMfzYtTs4JZ" target="_blank" rel="noopener noreferrer">Website Files</a> by clicking the link!
                        </p>
                    </section>
                    
                    <img className="centered-img" src={exitium} alt="Exitium.org Passion Project"/>
                    
                    <section>
                        <h2>Cloaking_Ocean.com (Old)</h2>
                        <p>
                            This was the previous rendition of my portfolio website! You can get the{' '}<a href="https://drive.google.com/open?id=1XrSP2rn2KCj6JumjmEzufjBhtu0B8bnq" target="_blank" rel="noopener noreferrer">Website Files</a>{' '}
                            from clicking the link! A significant change I've made from this earlier version is including{' '}
                            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>! Bootstrap is a JavaScript framework
                            that comes included with many CSS and JavaScript components that are incredibly polished and increase a programmer's efficiency
                            drastically! These libraries and frameworks are vast and varied in the web development world, and I'm just scraping the surface!
                            Also, the color scheme between versions has also been substantially improved in my eyes! The{' '}
                            <a href="https://github.com/CloakingOcean/CloakingOcean.com-3.0-React" target="_blank" rel="noopener noreferrer">Website Files</a>{' '}
                            for the new and improved version can be found here!
                        </p>
                    </section>
                    
                    <img className="centered-img" src={cloaking} alt="Cloaking Ocean First Version"/>
                    
                </div>
            </div>
        );
    }

}
export default Web;
