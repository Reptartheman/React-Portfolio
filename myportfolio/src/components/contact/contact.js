import React, { useRef } from 'react';
import '../../App.css'
import '../contact/contact.css'


export default function Contact () {
    return (
<section>
<div class="container">  
  <form id="contact" action="" method="post">
    <h3>Quick Contact</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    </fieldset>

    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
</section>
    )
}