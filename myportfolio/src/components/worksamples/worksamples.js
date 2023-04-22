import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'
import '../worksamples/worksamples.css'
import IconOne from '../../assets/user.png'
import IconTwo from '../../assets/pie-chart.png'
import IconThree from '../../assets/web-design.png'
import IconFour from '../../assets/cloud-network.png'
import IconFive from '../../assets/newspaper.png'
import IconSix from '../../assets/list.png'

export default function WorkSamples() {
    return (
        <section>
            <h1>My Web Apps</h1>
            <div className="parent">
            <a href="https://reptartheman.github.io/Challenge-5-Workday-planner/" target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconFive} alt="statistics" width="100" height="100"></img>
                        <figcaption><button id="webappbuttons"> Workday Planner</button></figcaption>
                </figure> 
            </a>
            <a href="https://reptartheman.github.io/Weather-you-like-it-or-not/" target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconFour} alt="statistics" width="100" height="100"></img>
                        <figcaption><button id="webappbuttons"> Weather you like it or not</button></figcaption>
                </figure> 
            </a>
            <a href="https://thawing-plateau-90815.herokuapp.com/" target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconSix} alt="statistics" width="100" height="100"></img>
                        <figcaption><button id="webappbuttons"> Note Taker</button></figcaption>
                </figure> 
            </a>
            <a href="https://gist.github.com/Reptartheman/48ee82887c28f415a7baefae419959d9"target={"_blank"}>
                        <figure className="grid-item">
                            <img src={IconThree} alt="statistics" width="100" height="100"></img>
                            <figcaption><button id="webappbuttons"> RegEx Gist</button></figcaption>
                        </figure>
            </a>
            <a href="https://github.com/Reptartheman/Let-s-make-a-team"target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconOne} alt="statistics" width="100" height="100"></img>
                        <figcaption><button id="webappbuttons"> Let's Make a Team Repo</button></figcaption>
                </figure> 
            </a>
            <a href="https://github.com/Reptartheman/E-Commerce-Back-End"target={"_blank"}>
                    <figure className="grid-item">
                        <img src={IconTwo} alt="statistics" width="100" height="100"></img>
                        <figcaption><button id="webappbuttons"> E-Commerce Back-End Repo</button></figcaption>
                    </figure>
            </a>
            </div>
        </section>
    )
}