import React from 'react'

const AppBar = ({firstname="User"}) => {
  return (
    <div className='shadow h-14 flex justify-between'>
      <div className='flex flex-col justify-center h-full ml-4 font-medium text-xl'>ZuPay</div>
      <div className='flex'>
        <div className='flex flex-col justify-center h-full mr-4'>
          Hello, {firstname}
        </div>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
          <div className='flex flex-col justify-center h-full text-xl'>
            {firstname[0].toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBar