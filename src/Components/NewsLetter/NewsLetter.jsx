import React from 'react';
import './NewsLetter.css';
import { JackInTheBox } from "react-awesome-reveal";

export default function NewsLetter() {
  return (
   
      <div className='newsletter'>
          <h1>Get Exclusive Offers on Your Email</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <div>
              <input type="email" placeholder='Your Email Id'/>
              <button>Subscribe</button>
          </div>
      </div>
    
  )
}
