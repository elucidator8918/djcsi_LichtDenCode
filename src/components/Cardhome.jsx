import React from 'react'
import Lock from './threejs/Lock'

export default function Cardhome() {
  return (
    
    <div className='mt-4 '>
    <div className="relative overflow-hidden  ">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="font text-4xl font-bold tracking-tight bg-black text-gray-200 sm:text-6xl">Introducing Authentica!</h1>
          <p className="mt-4 text-2xl text-gray-300">Authentica is a software tool that provides authentication and authorization services to ensure secure access to data and resources. It uses authentication protocols like username and password, biometrics, smart cards, tokens, and multi-factor authentication to validate user identities. </p>
        </div>
        <div>
          <div className="mt-10">
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <Lock/>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-items-center mx-44  '>
            <a href="/login" className=" rounded-md border border-transparent bg-violet-600 py-3 px-6 font-medium text-white hover:bg-indigo-700">Get Started <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  )
}
