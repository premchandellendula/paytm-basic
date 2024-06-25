import React from 'react'

const SendMoney = () => {
  return (
    <div className='flex justify-center h-screen bg-gray-100'>
      <div className='h-full flex flex-col justify-center'>
        <div className='border h-min text-card-foreground max-w-md space-y-8 w-96 bg-white shadow-lg rounded-lg'>
          <div className='flex flex-col space-y-1.5 p-6'>
            <h2 className='text-3xl font-bold text-center'>Send Money</h2>
          </div>

          <div className='p-6'>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center'>
                <span className='text-2xl text-white'>A</span>
              </div>
              <h3 className='text-2xl font-semibold'>Friend's name</h3>
            </div>
          
            <div className='space-y-4'>
              <div className='space-y-2'>
                <label for="balance" className='text-sm font-medium leading-none peer:disabled:cursor=not-allowed peer:disabled:opacity-70'>Amount (in Rs)</label>
                <input 
                  type="number" 
                  placeholder='Enter amount' 
                  id='balance' 
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'/>
              </div>
              <button className='justify-center rounded-md text-sm font-medium rind-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white'>Initiate transfer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoney