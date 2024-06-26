import React, { useState } from 'react'
import Button from './Button'

const LandingUsers = () => {
    const [users, setUsers] = useState([{
        firstname: "Premchand",
        lastname: "Ellendula",
        _id: 1
    },{
        firstname: "Rohit",
        lastname: "Sharma",
        _id: 2
    },{
        firstname: "Jasprit",
        lastname: "Bumrah",
        _id: 3
    },{
        firstname: "Virat",
        lastname: "Kohli",
        _id: 4
    },{
        firstname: "Rishab",
        lastname: "Pant",
        _id: 5
    }])
  return (
    <div>
        <div className='font-bold mt-6 text-lg'>Users</div>
        <div className='my-2'>
            <input type="text" placeholder='Search users....' className='border border-slate-200 w-full px-2 py-1 rounded'/>
        </div>
        <div>
            {users.map(user => <User key={user._id} user={user}/>)}
        </div>
    </div>
  )
}

function User({user}){
    return <div className='flex justify-between'>
        <div className='flex'>
            <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
                <div className='flex flex-col justify-center h-full text-xl'>
                    {user.firstname[0].toUpperCase()}
                </div>
            </div>

            <div className='flex flex-col justify-center h-full'>
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center h-full'>
            <Button label={"Send Money"}/>
        </div>
    </div>
}

export default LandingUsers