import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation();
  const {firstname} = location.state || ""
  const {balance} = location.state || 999
  return (
    <div>
      <AppBar firstname={firstname}/>
      <div className='m-6'>
        <Balance value={balance}/>
        <Users />
      </div>
    </div>
  )
}

export default Dashboard