//import './App.css';
//import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup1 from './pages/Signup1';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Dashboardhome from './components/Dashboardhome';
import Employeeinfo from './components/Employeeinfo';
import Navbar from './components/Navbar';

function App() {
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
        <Route path='/dashboardhome' element={<Dashboardhome/>}/>
        <Route path='/employeeinfo' element={<Employeeinfo/>}/>
        


      </Routes>
    </div>
    </>
  );
}

export default App;
