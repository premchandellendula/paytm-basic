import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'

const Dashboard = () => {
  return (
    <div>
      <AppBar firstname="Premchand"/>
      <div className='m-6'>
        <Balance value={"9944"}/>
        <Users />
      </div>
    </div>
  )
}

export default Dashboard