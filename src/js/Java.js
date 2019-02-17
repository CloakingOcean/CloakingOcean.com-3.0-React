import React, { Component } from 'react';

import aPlus from "../images/certifications/a_plus_comp_maintenance.png";
import program from "../images/certifications/comp_programming.png";
import info from "../images/certifications/information_tech_pathway.png";
import network from "../images/certifications/network_fundamentals.png";
import pcpro from "../images/certifications/pc_pro.png"

class Java extends Component {
  render() {
    return (
        <div>
            {/* Breakpoint debugging tool to be filled in with javascript from writeBreakpoint() method */}
            <header class="header" data-id="1">
                <!-- To be filled in with javascript from writeHeader() method-->
            </header>

            <div class="container">
                <div class="row">
                    <h1>Java | My First Progrmaming Language!</h1>
                </div>
                <section>
                    <h2>Java Introduction</h2>
                    <p>
                        I've been programming with Java since about 2012-2013. It was the very first programming language I was
                        introduced to. The spark that led me to further my knowledge was Minecraft and a server API <i>(Application Programming Interface)</i> named Bukkit.
                        At this point, I had just recently started playing Minecraft on my computer rather than my Xbox, and I was excited to see
                        the vastly broader range of options that were available to me! Later on, once I learned of Minecraft server
                        mods, my mind was blown, and I <i>had</i> to learn how these were made!
                    </p>
                    <p>
                        I started watching youtube tutorials about programming with Bukkit.
                        <a href="https://www.youtube.com/watch?v=CrMGokrBHdg&list=PL4A0C6138F3F5AA41" target="_blank">TheBCBroz</a> was my very first programming
                        teacher. I quickly learned Bukkit was only a small part of a gigantic programming language known as Java. To be successful
                        in this endeavor, I needed to learn Java's core as well as possible.
                    </p>
                    <p>
                        <a href="https://www.youtube.com/watch?v=Hl-zzrqQoSE&list=PLFE2CE09D83EE3E28" target="_blank">TheNewBoston</a>'s Java tutorials were a massive help,
                        and eventually, I enrolled in a Java programming class at my high school as well! That's where I learned many important programming concepts such as
                        object-oriented programming, execution time, and boolean logic. I experimented by creating a handful of desktop applications using spring and other API.
                        To this day Java is my most influential programming language. However, Java development has been put to the backburner recently because I've been trying to
                        increase my understanding of other computer technologies. Below is one of my very first and very rough projects. I was attempting to make a space invader game.
                    </p>
                </section><!-- Java Introduction Section -->

                <div class="carousel-item active">
                    <img class="carousel img-fluid" src="images/examples/Space Invaders/space-invaders-demo.gif"/>
                </div><!-- Carousel Item -->

                </br>
                <section>
                    <h2>Minecraft (Bukkit/Spigot)</h2>
                    <p>
                        As mentioned before, Minecraft was my starting drive to learn to program in general. The server API was exciting, new, and vast.
                        Instantly, I jumped onto the <a href="https://bukkit.org/forums/ target="_blank"">Bukkit Forums</a> to find anyone willing to let me attempt
                        plugin development on their server. For a few years, I worked on personal and small client projects to experiment with the API
                        and gain experience in the process. Eventually, I was hired for a time at <a href="https://www.superleague.com/" target="_blank">Super League Gaming</a>! What follows is a look into one of my favorite personal projects.
                    </p>
                </section><!-- Minecraft Section -->

                </br>

                <div class="carousel-item active">
                    <img class="carousel img-fluid" src="images/examples/Whewheo/whewheo-demonatration.gif"/>
                </div><!-- Carousel Item -->

                <section>
                    <h2>Whewheo ~ Advanced Modular Teleportation</h2>
                    <p>
                        The above animation demonstrates my teleportation plugin, Whewheo! It features advanced teleportation and modular particle
                        generator design. Players can easily use the warp compass to get from point A to point B. The items you see on screen as well
                        as the particle generator used for sending or receiving animations are all customizable. Whewheo's aesthetic teleportation
                        system has been designed from the beginning to be easily added upon to enable more diverse options! I believe this project
                        was initially requested by an individual who wanted it to be available for everyone.
                        <a href="https://github.com/CloakingOcean/Whewheo" target="_blank">Whewheo's Source Code</a> is available on my GitHub page!
                        This was one of my most challenging projects and one that I'm very proud of! However, I do plan to improve upon many things
                        in the future.
                    </p>
                </section> <!-- Whewheo Section -->
            </div><!-- Container -->
        </div>
    );
  }
}

export default Java;
