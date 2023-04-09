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
import { SiAirbnb} from "react-icons/si";
import { SiAmazon } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiApple} from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { SiDuolingo} from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin} from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { BsFacebook} from "react-icons/bs";
import { SiTinder} from "react-icons/si";
import { TbBrandBumble} from "react-icons/tb";
import { TbBrandGrindr} from "react-icons/tb";
import Gauge from './Gauge'

const Employeeinfo = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const[user,setUser]=useState('vedicabafna')
  const[countryCode,setcountryCode]=useState('IN')
  //insta
  const [bio,setbio] = useState('')
  const [pfp,setpfp] = useState('')

//linkedin
  const [namelink,setNamelink] =useState('')
  const [data,setData] =useState('')
  const [pfplink,setpfplink] =useState('')
  
  //duo&air
  const [regiduo,setRegiduo] =useState('')
  const [regiair,setRegiair] =useState('')

  //phone
  const[risklev,setRisklev]=useState('')
  const[carrier,setCarrier]=useState('')
  const[whatsapp,setWhatsapp]=useState('')
  const[amazon,setAmazon]=useState('')
  const[map,setMap]=useState('')

  
  useEffect(() => {
  
    // Linkedin(localStorage.getItem('email'));
    // Truecaller(phoneNo, countryCode);
    // emailRisk(email);
  }, []);

 
 



   
  
 
  console.log(namelink)
  console.log(data)
  console.log(pfplink)
  

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
      setRegiduo(response.data.message.deep_email_check.online_profiles.duolingo.is_registered);
      //message.deep_email_check.online_profiles.airbnb.is_registered
      setRegiair(response.data.message.deep_email_check.online_profiles.airbnb.is_registered);

      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  console.log(regiduo)
 console.log(regiair)
 

  async function phoneRisk(email) {
    
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
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);

  const handleClick = event => {
    event.preventDefault()
    setIsVisible(current => !current);
    console.log("entered");
    try {
      const response =  axios.post(
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
     console.log(bio)
     console.log(pfp)
    } catch (error) {
      console.error(error);
    }
    
  }
  const handleClick2 = event => {
    try {
      const response = axios.post(
        'http://localhost:5000/Linkedin', // fix the URL here
        {
          email: localStorage.getItem('email')
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setNamelink(response.data.message.persons.displayName);//name
      setData(response.data.message.persons.headline);//photoUrl or headline
      setpfplink(response.data.message.persons.photoUrl) //pfp linkedin

    } catch (error) {
      console.error(error);
    }
    setIsVisible2(current => !current);
    
  }
  const handleClick3 = event => {
    setIsVisible3(current => !current);
    try {
      const response =  axios.post(
        'http://localhost:5000/phoneRisk', // fix the URL here
        {
          phone: localStorage.getItem('phoneNo')
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setRisklev(response.data.message.deep_phone_check.risk_level);
      setCarrier(response.data.message.deep_phone_check.carrier.main_mobile_carrier_listl);
      setWhatsapp(response.data.message.deep_phone_check.online_profiles.whatsapp.error);
      setAmazon(response.data.message.deep_phone_check.online_profiles.amazon.error);
      setMap(response.data.message.deep_phone_check.location.city);


      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
    
  }
  
  function handleHideBanner() {
    setIsVisible(false);
  }
  function handleHideBanner2() {
    setIsVisible2(false);
  }
  function handleHideBanner3() {
    setIsVisible3(false);
  }
  return (
    <>    
    <div className='flex flex-row  absolute  bg-slate-100 '>
      
      <Sidebar/>
      <div className='mt-24'>
        <div className=" bg-slate-100 bg-cover bg-no-repeats">
        <div className="ml-60 grid  max-w-2xl grid-cols-2 items-center  sm:px-6 lg:max-w-7xl lg:grid-cols-2 justify-end">
            <div className='flex flex-col'>
            <div className='mt-[-200px] flex items-center justify-center '>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
             </div>
                <div className='  left-0 flex mt-10 items-center justify-center mb-20'>
                <Gauge/>
                </div>
            

                <div className='flex flex-wrap items-center justify-center gap-2 mt-10 text-[70px] '>
        <SiApple/>
        <SiAirbnb />
        <SiGooglemaps/>
        <SiAmazon/>
        <BsFillTelephoneFill/>
        <FiInstagram/>
        <BsWhatsapp/>
        <BsLinkedin/>
        <SiGithub/>
        <SiDuolingo/>
        <SiAndroid/>
        <BsFacebook/>
        <SiCisco/>
        <SiTinder/>
        <TbBrandBumble/>
        <TbBrandGrindr/>
    </div>
    </div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ml-2 mt-4">
           
            <Tilt >
                            <div onClick={handleClick} className='bg-gradient-to-tr from-gray-700 to-black rounded-[20px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
                                <img src={img1} className='w-36 h-36 mt-1 mx-auto mb-2'/>
                                {/* <script src='https://scontent-hel3-1.cdninstagram.com/v/t51.2885-19/277271782_656993692074097_5855960535476122668_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=frJzKQ-0R9wAX89JzZy&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfDHPQH2K_xlHoT2A2Lblxr7inFp5TxLnpU5Si1a_mnmLw&oe=64376E0C&_nc_sid=a9513d' className='w-36 h-36 mt-1 mx-auto mb-2'></script> */}
                                <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Instagram</p>

                            </div>
                            
            </Tilt>          
            {isVisible && (
              
                <div>
                    <div className="relative z-[100]" role="dialog" aria-modal="true">
              
              <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-100 transition-opacity md:block"></div>
            
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                  
                  <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                      <button onClick={handleHideBanner} type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
            
                      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                          <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center"/>
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Instagram Bio: {bio}</h2>
                          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Display Picture URL:{pfp}</h2>
            
                          <section aria-labelledby="information-heading" className="mt-2">
                            <h3 id="information-heading" className="sr-only"></h3>
            
                            {/* <p className="text-2xl text-gray-900">$192</p>
            
                       
                            <div className="mt-6">
                              <h4 className="sr-only">Reviews</h4>
                              <div className="flex items-center">
                                
                                
                                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                              </div>
                            </div> */}
                          </section>
            
                          <section aria-labelledby="options-heading" className="mt-10">
                            <h3 id="options-heading" className="sr-only">Product options</h3>
            
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </div>
                )}
            
            <Tilt >
                              <div onClick={handleClick2} className='bg-gradient-to-tr from-gray-700 to-black rounded-[20px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
                                <img src={img2} className='w-36 h-36 mt-1 mx-auto mb-2'/>
                                <p className="font-bold text-stone-100 mt-2 text-center text-xl ">LinkedIn </p>

                            </div>
            </Tilt>
            {isVisible2 && (
              
              <div>
                  <div className="relative z-[100]" role="dialog" aria-modal="true">
            
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-100 transition-opacity md:block"></div>
          
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                
                <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button onClick={handleHideBanner2} type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
          
                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center"/>
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">LinkedIn Name: {namelink}</h2>
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">LinkedIn Bio: {data}</h2>
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Display Picture URL:{pfplink}</h2>
          
                        <section aria-labelledby="information-heading" className="mt-2">
                          <h3 id="information-heading" className="sr-only"></h3>
          
                          {/* <p className="text-2xl text-gray-900">$192</p>
          
                     
                          <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              
                              
                              <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                            </div>
                          </div> */}
                        </section>
          
                        <section aria-labelledby="options-heading" className="mt-10">
                          <h3 id="options-heading" className="sr-only">Product options</h3>
          
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </div>
              )}
            
            <Tilt >
            <div onClick={handleClick3} className='mt-[-15px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
                                <img src={img3} className='w-36 h-36 mt-1 mx-auto mb-2'/>
                                <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Truecaller</p>

                            </div>
            </Tilt>          
              {isVisible3 &&(
              <div>
              <div className="relative z-[100]" role="dialog" aria-modal="true">
        
        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-100 transition-opacity md:block"></div>
      
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            
            <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button onClick={handleHideBanner3} type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
      
                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center"/>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Risk Level: {risklev}</h2>
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Carrier:{carrier}</h2>
      
                    <section aria-labelledby="information-heading" className="mt-2">
                      <h3 id="information-heading" className="sr-only"></h3>
      
                      {/* <p className="text-2xl text-gray-900">$192</p>
      
                 
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          
                          
                          <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                        </div>
                      </div> */}
                    </section>
      
                    <section aria-labelledby="options-heading" className="mt-10">
                      <h3 id="options-heading" className="sr-only">Product options</h3>
      
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
            )}
      <div className='w-[20rem] mt-[-15px] ml-[-12px] '>
      <Carousel>
        <div className=''>
          <Tilt >
          <div className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img4} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">WhatsApp</p>
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Is Registered:{whatsapp}</p>


            </div>
          </Tilt>       
        </div>

        <div>
        <Tilt >
            <div className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img5} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Amazon</p>
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Is Registered:{amazon}</p>

            </div>
          </Tilt>   
        </div>

        <div>
          <Tilt>
          <div className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img6} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Duolingo</p>
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Is Registered:{regiduo}</p>
            </div>
          </Tilt>
        </div>

        <div>
          <Tilt>
          <div  className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img7} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Maps</p>
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">City:{map}</p>

            </div>
          </Tilt>
        </div>

        <div>
        <Tilt>
        <div o className=' w-[290px] bg-gradient-to-tr from-gray-700 to-black rounded-[20px] ml-[14px] px-6 py-16 items-center border-4 border-purple-600 justify-center'> 
              <img src={img8} className="h-36 w-auto  mx-auto " alt="employee" />
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Airbnb</p>
              <p className="font-bold text-stone-100 mt-2 text-center text-xl ">Is Registered:{regiair}</p>

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