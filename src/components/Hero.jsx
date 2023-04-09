import React, { useState, useEffect } from 'react';
import {styles} from '../styles'
import ComputersCanvas from './canvas/Computers';
import Particles1 from './Particles1';
import Footer from './Footer';

const Hero = () => {
    return ( 
        <div>
        <div>
            <Particles1/>
        <section className='relative w-full h-screen mx-0 flex flex-row'>
            Hero
            <div className={`${styles.paddingX} absolute ml-16 top-[80px] max-w-7xl mx-auto flex flex-row items-start`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-purple-400'/>
                    <div className='w-1 h-72 bg-gradient-to-b from-purple-400 to-black'/>
                </div>
                <div className='font-bold'>
                    <h1 className={`${styles.heroHeadText} text-white ml-2`}> Contact <span className='text-purple-400'>Us</span></h1>
                    <p className={`${styles.heroSubText} text-white m-2 max-w-3xl `}> Email: Scraper.io@gmail.com</p>
                    <p className={`${styles.heroSubText} text-white m-2 max-w-3xl`}> Phone: +91 88277277272</p>
                    <p className={`${styles.heroSubText} text-white m-2 max-w-3xl`}>Address: DJSCE,Ville Parle,Mumbai.</p>
                    </div>
                    
            </div>
            <div className='w-full right-0 pl-[520px]' >
            <ComputersCanvas/>
            </div>
            {/*<EarthCanvas/>*/}
            
        </section>
        
        </div>
        <Footer/>
        </div>

    );
}
 
export default Hero;