//import './App.css';
//import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup1 from './pages/Signup1';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
// import Dashboardhome from './components/Dashboardhome';
import Employeeinfo from './components/Employeeinfo';
import Navbar from './components/Navbar';
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from 'react';
import Urlrisk from './components/Urlrisk';
import Hero from './components/Hero'
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';


function App() {
  useEffect(() => {
    alanBtn({
      key: "72a5568c510819bf5cb573b94179b2ce2e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
  }, []);
  return (
    <>
    <Navbar/>
    <div className="App">
      {/* <Navbar/> */}
      {/* <Dashboard/> */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Signup1/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/employeeinfo' element={<Employeeinfo/>}/>
        <Route path='/urlrisk' element={<Urlrisk/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/about' element={<Aboutus/>}/>

        


      </Routes>

    </div>
    </>
  );
}

export default App;
