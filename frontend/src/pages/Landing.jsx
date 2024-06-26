import React from 'react'
import LandingAppBar from '../components/LandingAppBar'
import Balance from '../components/Balance'
import LandingUsers from '../components/LandingUsers'

const Landing = () => {
  return (
    <div>
      <LandingAppBar />
      <div className='m-6'>
        <Balance value={"4455"}/>
        <LandingUsers />
      </div>
    </div>
  )
}

export default Landing