import React from 'react'
import instasvg from '../assets/instagram.svg'
import youtubesvg from "../assets/youtube.svg"
import Image from 'next/image'

function Footer() {
  return (
    <footer>
    <div className="footer-wrapper">
        <section className="footer-top">
            <div className="footer-headline">
                <h2 className='font-bold text-2xl'>Hapkido National Boxing Federation-India</h2>
                <p>
                    Welcome to the Boxing Journey.
                </p>
            </div>
          
        </section>
        <div className="footer-columns">
            <h3>Contact us :</h3>
            <ul id="contact">
                <li>
                    Phone : +91-7972788349
                </li>  
                <li>
                    Gmail : rajwagadkar3@gmail.com
                </li>
                <div className='social-links'>
                    <ul>
                        <li>
                            <a href="#" title="Instagram">
                                <Image src={instasvg} alt='Instagram'/>                       
                            </a>
                        </li>
                  
                       
                        <li>
                            <a href="#" title="Youtube">
                                <Image src={youtubesvg} alt='YouTube'/>
                            </a>
                        </li>
                    
                    </ul>
                </div>
            </ul>
            
          
         
        </div>
        <div className="footer-bottom">
  
            <small>© Copyright 2024 Hapkido Boxing National Federation-India. All rights reserved. <span id="year"></span>, All rights reserved</small>
        </div>
    </div>
</footer>
  )
}

export default Footer
