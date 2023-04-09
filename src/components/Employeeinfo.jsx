import React from 'react'
import Sidebar from './Sidebar'
import Card1 from './Card1'
import { Card2 } from './Card2'
import { useNavigate } from 'react-router-dom'
import {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'
// import img1 from './Arjun.png'
import Navbar from './Navbar'
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './insta.png';
import img2 from './linkedin.png';
import img3 from './truecaller.png';
import img4 from './whatsapp.png';
import img5 from './amazon.png';
import img6 from './duolingo.png';
import img7 from './maps.png';
import img8 from './airbnb.png';


const Employeeinfo = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const[user,setUser]=useState('vedicabafna')
  const[countryCode,setcountryCode]=useState('IN')
  //insta
  const [bio,setbio] = useState('')
  const [pfp,setpfp] = useState('')

  const [data,setData] =useState('')
  useEffect(() => {
    Instagram(user);
    // Linkedin(localStorage.getItem('email'));
    // Truecaller(phoneNo, countryCode);
    // emailRisk(email);
  }, []);

  async function Instagram(user) {
    try {
      const response = await axios.post(
        'http://localhost:5000/instagram', // fix the URL here
        {
          user: user
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
     setbio(response.data.message.user.biography)
     setpfp(response.data.message.user.hd_profile_pic_url_info.url)
      
    } catch (error) {
      console.error(error);
    }
  }

  Instagram(user)
  console.log(bio)
  console.log(pfp)


  async function Linkedin(email) {
    try {
      const response = await axios.post(
        'http://localhost:5000/Linkedin', // fix the URL here
        {
          email: email
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setData({data:response.data.message.persons});//photoUrl or headlines
   
    } catch (error) {
      console.error(error);
    }
  }
  // Linkedin(localStorage.getItem('email'))
  // console.log(data)

  async function Truecaller(phoneNo,countryCode) {
    try {
      const response = await axios.post(
        'http://localhost:5000/Truecaller', // fix the URL here
        {
          phone: phoneNo,
          countryCode:countryCode
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data); 
      return response.data.message.user
    } catch (error) {
      console.error(error);
    }
  }
  
  async function emailRisk(email) {
    try {
      const response = await axios.post(
        'http://localhost:5000/emailRisk', // fix the URL here
        {
          email: email
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      //message.deep_email_check.online_profiles.duolingo.is_registered
      //message.deep_email_check.online_profiles.airbnb.is_registered

      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
  

//phone risk:
//message.deep_phone_check.risk_level
//message.deep_phone_check.carrier.main_mobile_carrier_list


//message.deep_phone_check.online_profiles.whatsapp.error
//message.deep_phone_check.online_profiles.amazon.error
//message.deep_phone_check.location.city
//

  // Call the all the functions
  
  
  
  
  
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
        <div className="ml-60 grid  max-w-2xl grid-cols-1 items-center  sm:px-6 lg:max-w-7xl lg:grid-cols-2 justify-end">
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
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ml-2 mt-4">
           
            <Tilt >
                            <div onClick={handleClick} className='bg-gradient-to-tr from-gray-700 to-black rounded-[20px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
                                <img src={`${pfp}`} className='w-36 h-36 mt-1 mx-auto mb-2'/>
                                <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Instagram{bio}</p>

                            </div>
                            
            </Tilt>            
            <Tilt >
                              <div onClick={handleClick} className='bg-gradient-to-tr from-gray-700 to-black rounded-[20px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
                                <img src={img2} className='w-36 h-36 mt-1 mx-auto mb-2'/>
                                <p className="font-bold text-stone-100 mt-2 text-center text-xl ">LinkedIn </p>

                            </div>
            </Tilt>
            {isShown &&(
              <Card2/>
            )}
            
            <Tilt >
            <div onClick={handleClick} className='mt-[-15px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
                                <img src={img3} className='w-36 h-36 mt-1 mx-auto mb-2'/>
                                <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Truecaller</p>

                            </div>
            </Tilt>          
              {isShown1 &&(
              <Card2/>
            )}
      <div className='w-[20rem] mt-[-15px] ml-[-12px] '>
      <Carousel>
        <div className=''>
          <Tilt >
          <div onClick={handleClick} className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img4} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">WhatsApp</p>

            </div>
          </Tilt>       
        </div>

        <div>
        <Tilt >
            <div onClick={handleClick} className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img5} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Amazon</p>
            </div>
          </Tilt>   
        </div>

        <div>
          <Tilt>
          <div onClick={handleClick} className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img6} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Duolingo</p>
            </div>
          </Tilt>
        </div>

        <div>
          <Tilt>
          <div onClick={handleClick} className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img7} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Maps</p>
            </div>
          </Tilt>
        </div>

        <div>
        <Tilt>
        <div onClick={handleClick} className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img8} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Airbnb</p>
            </div>
        </Tilt>
      </div>
      </Carousel>
    </div>
            
          </div>
        </div>
        </div>
        </div>
    </div>
    </>

  )
}

export default Employeeinfo