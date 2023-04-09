import React,{useEffect,useState} from 'react'
import Sidebar from '../components/Sidebar'


const Urlrisk = () => {
    const [Url, setUrl] = useState('');
    const [ans, setAns] = useState(0)

    const handleSubmit = () => {
        console.log('first')
        setAns(Math.floor(Math.random()*10))
    }

    console.log(ans)

  return (
    <div>
        <div className='flex flex-col bg-cover w-full fixed pb-72 bg-gradient-to-br from-gray-700 via-gray-800 to-black' >
        <Sidebar/>
        
      <div className='flex flex-col ml-60  mt-28 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid-cols-2 justify-end pr-9'> 
      <div className='flex flex-row border-b border-gray-400 mb-4 pb-2' >
        <div className=' mb-3 text-4xl justify-center items-center pt-3 text-gray-100'>URL Risk Inspector</div>
        </div>

      <div className=' mb-3 text-xl text-gray-100'>
      Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community.
            </div>
      
      <div class="mb-12 ">
        <label for="email" class="block text-2xl font-semibold leading-6  text-gray-100">URl:</label>
        <div class="mt-2.5">
          <input  onChange={(e) => setUrl(e.target.value)}  placeholder="Enter the URL" autocomplete="email" class="bg-violet-200 w-[400px] text-xl h-14 block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
        <div className=' flex'>
          <button type="submit" className="bg-violet-300 text-black py-2 px-4  text-xl rounded hover:bg-violet-400 " onClick={handleSubmit}> Submit</button>
      </div>
      <div className='pt-3 text-white'>
       <h1> {ans>5?"High":"low"}</h1>

      </div>
      </div>        
      </div>
    </div>
    
  )
}

export default Urlrisk