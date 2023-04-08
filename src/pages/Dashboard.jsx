import React from 'react'
import Sidebar from '../components/Sidebar'
import Employeeinfo from '../components/Employeeinfo'
import Dashboardhome from '../components/Dashboardhome'
import Navbar from '../components/Navbar'
//import { Link, Route } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-row absolute '>
        <Sidebar/>
        
        
        <Dashboardhome/> 

    </div>

  )
}

export default Dashboard