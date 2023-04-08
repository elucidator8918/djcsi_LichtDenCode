import React,{useState} from 'react'
// import Particles from '../components/Particles1'
import Navbar from '../components/Navbar'
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from "react-router-dom";
// import Home from '../components/Homecomp'
import axios from 'axios'
import Particles1 from '../components/Particles1';
import ReCAPTCHA from 'react-google-recaptcha';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: "user",
  mirrored:'False'
};

export const SignUp = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", firstName);
      formData.append("email", email);
      formData.append("password", password);
      
      console.log(file)
  
      const res = await axios.post('http://localhost:5000/register', formData, {
        headers:{
              'Content-Type': `multipart/form-data`,
          }
      });
  
      console.log(res);
  }
  //WEBCAM PART
  const [id,setId]= useState(1)

  const [image,setImage]=useState('');
  const webcamRef = React.useRef(null);


const capture = React.useCallback(async() => {
 const imageSrc = webcamRef.current.getScreenshot();
 setImage(imageSrc);
 // Create a blob from the base64-encoded data
 const blob = await (await fetch(imageSrc)).blob();

 // Create a File object from the blob
const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

const formData = new FormData()
console.log(file);
formData.append('file',file)



});



//THE CAPTCHA PART
   const key="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
const [captchaIsDone,setCaptchaDone]=useState(false);
function onChange()
{
    console.log('changed')
    setCaptchaDone(true)
}


     return (
    <div>
        <Particles1/>
        <Navbar/>
        <div className='container absolute'>
        <h1 className="text-3xl font-bold mb-4 text-white mt-24 text-center">
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
    <input type="text" className="form-control bg-violet-200" id="inputFirstName4" onChange={(event) => setFirstName(event.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label flex text-white">Last Name:</label>
    <input type="text" className="form-control bg-violet-200" id="inputLastName4" onChange={(event) => setLastName(event.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="flex form-label text-white">Email:</label>
    <input type="email" className="form-control bg-violet-200" id="inputEmail4" onChange={(event) => setEmail(event.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label flex text-white">Password:</label>
    <input type="password" className="form-control bg-violet-200" id="inputPassword4 " onChange={(event) => setPassword(event.target.value)}/>
  </div>
  

<div className='container' >
        <div className='mt-4'>
        {/* <Home/> */}
        <div className="home-container mx-auto col-md-6">
             <div className="container">
                 <div className="text-white">
                     <h1 className='mb-3 text-lg'>Please take an image of your face</h1>
                     <form className="form">

                     <div className="webcam-container ">
             <div className="webcam-img flex justify-center">

                 {image == '' ? <Webcam
                     audio={false}
                     height={400}
                     ref={webcamRef}
                     screenshotFormat="image/jpeg"
                     width={420}
                     mirrored='true'
                     videoConstraints={videoConstraints}
                 /> : <img src={image} />}
             </div>
             <div className='justify-center flex items-center'>
                 {image != '' ?
                     <button onClick={(e) => {
                         e.preventDefault();
                         setImage('')
                     }}
                         className="webcam-btn btn m-3 text-white hover:bg-violet-800 bg-violet-600 border-violet-600">
                         Retake Image</button> :
                     <button onClick={(e) => {
                         e.preventDefault();
                         capture();
                     }}
                         className="webcam-btn btn m-3  text-white hover:bg-violet-800 bg-violet-600 border-violet-600">Capture</button>
                 }
             </div>
         </div>


                         {/* <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                         <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /> */}
                         <div className='flex justify-center items-center mx-auto col-md-6'>
                         <ReCAPTCHA
                            sitekey={key}
                            onChange={onChange}
                        />
                        {/* {captchaIsDone && <button>Submit</button>} */}
                                                
                         </div>
                         {captchaIsDone &&<button type="submit" className='text-left mt-3 btn text-white hover:bg-violet-800 bg-violet-600 border-violet-600' id="login-button" >Submit</button>}
                     </form>
                 </div>
             </div>
         </div>
        </div>
            <div className='row'>
        <div className='  col-md-6 '></div>
        <div className="container  mx-auto col-md-6 mt-2">
       {/* <button type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600 " onClick={()=>{navigate("/register")}}> &larr; Previous</button> */}
       {/* <button  type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600" onClick={()=>{navigate("/")}}>Submit &rarr;</button> */}

       </div>
        </div>
        </div>

  <div className="col-12 mt-8 justify-center flex items-center">
    <button type="submit" className="btn text-white hover:bg-violet-800 bg-violet-600 border-violet-600" onClick={handleSubmit}>Sign in</button>
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
export default SignUp