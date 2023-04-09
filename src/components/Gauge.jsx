import GaugeChart from 'react-gauge-chart'
import React from 'react'


export default function Gauge() {
    let perc=0.36
  return (
    <div>
    <div className=' scale-110 justify-center'>
        <GaugeChart id="gauge-chart3" 
        nrOfLevels={30} 
        colors={['#5BE12C', '#F5CD19', '#EA4228']}
        arcWidth={0.4} 
        percent={perc} 
        hideText={['false']}
        />
        <h1 className= 'flex text-purple-900 text-6xl justify-center content-center'>{perc*100}%</h1>
        {/* <h1 className= 'flex text-red-900 text-8xl justify-center content-center'>SECURITY RISK</h1> */}

    </div>
    <h1 className= 'absolute  text-purple-300 text-5xl justify-center content-center py-10 left-80'>SECURITY RISK METER</h1>
    <div>
    
    </div>
    </div>
  )
}
