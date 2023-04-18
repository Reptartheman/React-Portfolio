import React, { useState } from "react";
import Header from './Header.css';
import bassGuitar from '../../assets/bass-guitar.png'
import Speakers from '../../assets/speaker.png'
import Mixer from '../../assets/mixing.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PageTop() {
    return (
        <header className='header'>
            <h1>
            <img src={bassGuitar} alt="bass-guitar" width="50" height="50"></img>
            Jeff Moro: Web Developer, Audio Engineer & Musician.
            <img src={bassGuitar} alt="bass-guitar" width="50" height="50"></img>
            </h1>
            <figure id="speakers">
            <img src={Speakers} alt="speaker" width="300" height="300"></img>
            <img src={Mixer} alt="mixingboard" width="200" height="200"></img>
            <img src={Speakers} alt="speaker" width="300" height="300"></img>
        </figure>
        <nav id="speakers">
            <a href="#About-Me"> <button id="navbuttons">About Me</button></a>
                <a href="#Links"> <button id="navbuttons">Links to work</button></a>
                <a href="#Contact"> <button id="navbuttons">Get in touch</button></a>
        </nav>
        </header>
    )
}