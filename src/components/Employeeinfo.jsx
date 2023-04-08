import React from 'react'
import Sidebar from './Sidebar'
import Card1 from './Card1'
import { Card2 } from './Card2'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react';
import Tilt from 'react-parallax-tilt'
import img1 from './Arjun.png'
import Navbar from './Navbar'


const Employeeinfo = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);

  const navigate = useNavigate()
  const handleClick = event => {
    setIsShown(current => !current);
  }
  return (
    <>    
    <div className='flex flex-row  absolute  bg-slate-100 '>
      
      <Sidebar/>
      <div className='mt-16'>
        <div className=" bg-slate-100 bg-cover bg-no-repeats">
        <div className="ml-64 grid  max-w-2xl grid-cols-1 items-center  sm:px-6 lg:max-w-7xl lg:grid-cols-2 justify-end">
            <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
            <div>
            <Card1/>

            </div>
            <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-400 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                </div>

                <div className="border-t border-gray-400 pt-4">
                <dt className="font-medium text-gray-900">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                </div>

                <div className="border-t border-gray-400 pt-4">
                <dt className="font-medium text-gray-900">Dimensions</dt>
                <dd className="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
                </div>

                <div className="border-t border-gray-400 pt-4">
                <dt className="font-medium text-gray-900">Finish</dt>
                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
                </div>

                <div className="border-t border-gray-400 pt-4">
                <dt className="font-medium text-gray-900">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                </div>

                <div className="border-t border-gray-400 pt-4">
                <dt className="font-medium text-gray-900">Considerations</dt>
                <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
                </div>
            </dl>
            </div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ml-10 mt-4">
           
            <Tilt >
                            <div onClick={handleClick} className='bg-gradient-to-tr from-gray-600 to-gray-900 rounded-[20px] px-6 py-12 items-center border-4 border-purple-600'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100 text-center mt-3'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100 text-center'> Department: HR</p>
                            </div>
            </Tilt>            
            <Tilt >
                            <div onClick={handleClick} className='bg-gradient-to-tr from-gray-600 to-gray-900 rounded-[20px] px-6 py-12 items-center border-4 border-purple-600'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100 text-center mt-3'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100 text-center'> Department: HR</p>
                            </div>
            </Tilt>
            {isShown &&(
              <Card2/>
            )}
            
            <Tilt >
                            <div onClick={handleClick} className='bg-gradient-to-tr from-gray-600 to-gray-900 rounded-[20px] px-6 py-12 items-center border-4 border-purple-600'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100 text-center mt-3'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100 text-center'> Department: HR</p>
                            </div>
            </Tilt>            {isShown1 &&(
              <Card2/>
            )}
            <Tilt >
                            <div onClick={handleClick} className='bg-gradient-to-tr from-gray-600 to-gray-900 rounded-[20px] px-6 py-12 items-center border-4 border-purple-600'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto rounded-full mb-2'/>
                                <p className='font-bold text-stone-100 text-center mt-3'>Name:Arjun Shah </p>
                                <p className='font-bold  text-stone-100 text-center'> Department: HR</p>
                            </div>
            </Tilt>            </div>
        </div>
        </div>
        </div>
    </div>
    </>

  )
}

export default Employeeinfo