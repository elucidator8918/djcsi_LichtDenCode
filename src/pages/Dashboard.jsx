import React,{useEffect,useState} from 'react'
import Sidebar from '../components/Sidebar'
import Employeeinfo from '../components/Employeeinfo'
import Dashboardhome from '../components/Dashboardhome'
import Navbar from '../components/Navbar'
//import { Link, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import bg from "../components/herobg.png"


const Dashboard = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo] =useState(0);
  const handleSubmit =()=>{
    localStorage.setItem('email',email);
    localStorage.setItem('phoneNo',phoneNo)
    navigate("/employeeinfo")
  }

  return (
    <div className='flex flex-col bg-cover w-full fixed pb-56 bg-gradient-to-br from-gray-700 via-gray-800 to-black' >
        <Sidebar/>
        
      <div className='flex flex-col ml-60  mt-28 max-w-2xl items-center sm:px-6 lg:max-w-7xl lg:grid-cols-2 justify-end pr-9'> 
      <div className='flex flex-row border-b border-gray-400 mb-4 pb-2' >
      <div class="">
          <div class="flex gap-x-3">
            <svg class="h-20 w-20 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div className=' mb-3 text-4xl justify-center items-center pt-3 text-gray-100'>Name/email</div>


        </div>
      {/* <div className="border-t border-gray-400 pt-4 mb-12 flex flex-row items-end justify-evenly">
      <dt className="font-medium text-gray-900">Name:</dt>
      <dt className="font-medium text-gray-900">Email:</dt>

        </div> */}
      <div className=' mb-3 text-xl text-gray-100'>
        Enter the following details to run background check.
      </div>
      
      <div class="mb-12 ">
        <label for="email" class="block text-2xl font-semibold leading-6  text-gray-100">Email:</label>
        <div class="mt-2.5">
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}  placeholder="Enter the email" autocomplete="email" class="bg-violet-200 w-[400px] text-xl h-14 block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="">
        <label for="phone-number" class=" text-2xl  font-semibold leading-6 text-gray-100">Phone number:</label>
        <div class="relative mt-2.5 ">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" class="h-full rounded-md border-1  bg-transparent bg-none  py-0 pl-4 pr-9 text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>IN</option>
              
            </select>
          </div>
          <input type="tel" name="phone-number" id="phone-number" onChange={(e) => setphoneNo(e.target.value)} placeholder="Enter the Phone Number" autocomplete="tel" class="block w-[400px] text-xl h-14 bg-violet-200 rounded-md border-0 px-3.5 py-2 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          
        </div>
        <div className='items-center flex justify-center'>
          <button type="submit" className="bg-violet-300 text-black py-2 px-4 mt-10 text-xl rounded hover:bg-violet-400 " onClick={handleSubmit}> Submit</button>
      </div>
      </div>        
      </div>
    </div>

  )
}

export default Dashboard