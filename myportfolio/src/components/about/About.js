import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOfMe from '../../assets/IMG_3432.jpeg'


export default function About() {
return (
<article>
<h1 id="About-Me">About Me</h1>
<div>
    <img id="imageofme" src={ImageOfMe} alt="me"></img>
    <p>Jeff Moro is a man of many hats. Primarily a bassist, he plays drums, keyboards, guitar and sings.
        To add to that list, he is also a producer, audio engineer, composer/songwriter, music educator,
        and is currently learning to code in various programming languages. Jeff holds a Bachelor's Degree in
        Audio and Music Production from Western Connecticut State University and
        during his time there, he was presented with many opportunities to play/study with some renowned
        musicians within the Jazz niche.
        Some of those musicians are Gerald Clayton, Jeff ‘Tain’ Watts, Curtis Fuller, Renee Rosnes, John Patitucci,
        Joe Lovano, Jimmy Greene, and many more.
        Jeff has been in/led many bands across different genres. From 2016-2018 he led a 9-piece Jazz Fusion
        group named ‘The Recess Bureau.’
    </p>
</div>
</article>
    )
}