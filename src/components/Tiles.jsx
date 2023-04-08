import React, { Component } from 'react';
import Tilt from 'react-parallax-tilt'
import img1 from './Arjun.png'
import {motion} from 'framer-motion'
import {styles} from '../styles'

const tiles = () => {
    return ( 
        <div className='mt-5 mx-auto flex flex-wrap gap-10 justify-center items h-auto'>
            <Tilt >
                            <div className='bg-gradient-to-r from-gray-700 to-gray-900 rounded-[20px] px-6 py-4 items-center border-2 border-blue-50'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100'> Department: HR</p>
                            </div>
            </Tilt>

            <Tilt >
                            <div className='bg-gradient-to-r from-gray-700 to-gray-900 rounded-[20px] px-6 py-4 items-center border-2 border-blue-50'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100'> Department: HR</p>
                            </div>
            </Tilt>

             <Tilt >
                            <div className='bg-gradient-to-r from-gray-700 to-gray-900 rounded-[20px] px-6 py-4 items-center border-2 border-blue-50'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100'> Department: HR</p>
                            </div>
            </Tilt>

            <Tilt >
                            <div className='bg-gradient-to-r from-gray-700 to-gray-900 rounded-[20px] px-6 py-4 items-center border-2 border-blue-50'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100'> Department: HR</p>
                            </div>
            </Tilt>

            <Tilt >
            <div className='bg-gradient-to-r from-gray-700 to-gray-900 rounded-[20px] px-6 py-4 items-center border-2 border-blue-50'> 
                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                <p className='font-bold text-stone-100'>Name:Arjun Shah </p>
                <p className='font-bold  text-stone-100'> Department: HR</p>
            </div>
            </Tilt>
            
            <Tilt >
            <div className='bg-gradient-to-r from-gray-700 to-gray-900 rounded-[20px] px-6 py-4 items-center border-2 border-blue-50'> 
                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                <p className='font-bold text-stone-100'>Name:Arjun Shah </p>
                <p className='font-bold  text-stone-100'> Department: HR</p>
            </div>
            </Tilt>
        </div>
     );
}
 
export default tiles;