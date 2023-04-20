import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/footer.css'
import SoundBars from '../../assets/sound.png'
import QRCode from '../../assets/QR wlink.png'

export default function Footer() {
    return (
        <footer className="pagefooter" id="Contact">
    <img src={SoundBars} alt="Sound Meters" width="250" height="250"></img>
    <p>Webpage by Jeff Moro, 2022
        
        Email: Jeffmoromusic@gmail.com
    <img id="footerQR" src={QRCode} alt="QR code" width="150" height="150"></img>
    </p>
    <img src={SoundBars} alt="Sound Meters" width="250" height="250"></img>


</footer>
    )

}