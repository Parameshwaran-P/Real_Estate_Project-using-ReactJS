import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="hero-container flexCenter paddings innerWidth">
            {/* left side */}
            <div className="hero-left flexColStart">
                <div className='hero-title'>
                    <div className="orange-circle"/>
                    <h1>Discover <br /> Most Suitable <br /> Property</h1>
                </div>
                <div className="hero-des flexColStart">
                    <span>
                    Find a variety of properties that suit you very easilty
                    </span>
                    <span>
                    Forgot all difficulties in finding a residence for you
                    </span>
                </div>
                <div className="search-bar flexCenter">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                           <CountUp start={8800} end={10000} duration={4} />
                           <span>+</span>
                        </span>
                        <span className='secondaryText'>
                          Premium Products
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                           <CountUp start={1675} end={2000} duration={4} />
                           <span>+</span>
                        </span>
                        <span className='secondaryText'>
                          Happy Clients
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                           <CountUp end={32}/>
                           <span>+</span>
                        </span>
                        <span className='secondaryText'>
                          Award Winning
                        </span>
                    </div>
                </div>




            </div>
            {/* right side */}
            <div className="hero-right flexCenter">
                <div className="image-container">
                    <img src="./hero-image.png" alt="hero-image" />
                </div>
            </div>    
        </div>

    </section>
  )
}

export default Hero