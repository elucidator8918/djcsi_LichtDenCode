import React,{useState} from 'react'
// import Landing from '../components/Landing'
// import Navbar2LOC from '../components/Navbar2LOC'
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from "react-router-dom";
import Particles1 from '../components/Particles1';
import Navbar from '../components/Navbar';
// import Home from '../components/Homecomp'



    // import axios from 'axios'


export const Signup = () => {
    const navigate = useNavigate()
   
     return (
    <div>
        <Particles1/>
        <Navbar/>
        <div className='container absolute'>
        <h1 className="text-3xl font-bold mb-4 text-white mt-24">
          <Typewriter
            words={['SignUp']}
            cursor
            cursorStyle='_'
            loop ={0}
          />
        </h1>
        <div className='container absolute mt-8' >
            <div className='row'>
        <div className=' mx-auto col-md-6 '>
        <form className="row g-3">
        <div className="col-md-6">
    <label for="inputEmail4" className="flex form-label text-white">First Name:</label>
    <input type="text" className="form-control bg-violet-200" id="inputFirstName4" onChange={(e)=>{localStorage.setItem('Fname',e.target.value)}}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label flex text-white">Last Name:</label>
    <input type="text" className="form-control bg-violet-200" id="inputLastName4" onChange={(e)=>{localStorage.setItem('Lname',e.target.value)}}/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="flex form-label text-white">Email:</label>
    <input type="email" className="form-control bg-violet-200" id="inputEmail4" onChange={(e)=>{localStorage.setItem('email',e.target.value)}}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label flex text-white">Password:</label>
    <input type="password" className="form-control bg-violet-200" id="inputPassword4 " onChange={(e)=>{localStorage.setItem('password',e.target.value)}}/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label flex text-white">Address Line 1:</label>
    <input type="text" className="form-control bg-violet-200" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label flex text-white">Address Line 2:</label>
    <input type="text" className="form-control bg-violet-200" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label flex text-white">City:</label>
    <input type="text" className="form-control bg-violet-200" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label flex text-white">State:</label>
    <select id="inputState" className="form-select bg-violet-200">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label flex text-white">Zip:</label>
    <input type="text" className="form-control bg-violet-200" id="inputZip"/>
  </div>
  <div class="mb-3">
  <label for="formFile" className="form-label flex text-white">Input your file: </label>
  <input className="form-control bg-violet-200" type="file" id="formFile" onChange={(e)=>{localStorage.setItem('file',e.target.value)}}/>
</div>

<div className='container' >
        <div className='mt-4'>
        {/* <Home/> */}
        </div>
            <div className='row'>
        <div className='  col-md-6 '></div>
        <div className="container  mx-auto col-md-6 mt-2">
       {/* <button type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600 " onClick={()=>{navigate("/register")}}> &larr; Previous</button> */}
       {/* <button  type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600" onClick={()=>{navigate("/")}}>Submit &rarr;</button> */}

       </div>
        </div>
        </div>

  <div className="col-12 mt-8">
    <button type="submit" className="btn text-white hover:bg-violet-800 bg-violet-600 border-violet-600">Sign in</button>
  </div>

  
</form>
</div>
{/* <div className="container mx-auto col-md-6 mt-2">
       <button disabled type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600 " onClick={()=>{navigate("/register1")}}> &larr; Previous</button>
       <button  type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600" onClick={()=>{navigate("/register2")}}>Next &rarr;</button>

       </div> */}

    </div>
    </div>
    </div>

    <div className='container'>
        {/* <Landing/>
        <Navbar2LOC/> */}
        <div className='container absolute'>
        {/* <h1 className="text-3xl font-bold mb-2 text-white mt-24">
          <Typewriter
            words={['SignUp']}
            cursor
            cursorStyle='_'
            loop ={0}
          />
        </h1> */}
       
     
        </div>
        

    </div>

    </div>
  )
}
export default Signup