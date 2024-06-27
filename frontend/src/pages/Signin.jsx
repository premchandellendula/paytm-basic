import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const navigate = useNavigate();
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onChange={(e) => {
                  setUserName(e.target.value)
                }} label={"Email"} placeholder={"johndoe@gmail.com"}/>

                <InputBox onChange={(e) => {
                  setPassword(e.target.value)
                }} label={"Password"} placeholder={"123abc"}/>

                <div className='pt-4'>
                    <Button onClick={async () => {
                      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username,
                        password
                      })

                      // console.log(response.data.token)
                      localStorage.setItem("token", response.data.token)

                      const userResponse = await axios.get("http://localhost:3000/api/v1/user/user", {
                        headers: {
                          Authorization: "Bearer " + response.data.token
                        }
                      })

                      setFirstName(userResponse.data.firstname)
                      navigate('/dashboard', {state: {firstname: userResponse.data.firstname}})
                    }} label={"Sign In"} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={'/signup'}/>
            </div>
        </div>
    </div>
  )
}

export default Signin