"use client"
import login, { logout } from '@/services/auth_services'
import React, { SyntheticEvent, useState } from 'react'

const LoginScreen = () => {
  const [userLogin,setUserLogin] = useState({
    email:"",
    password:""
  })

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    login({email:userLogin.email,password:userLogin.password})
  }

  const guestLogot = (e:SyntheticEvent) => {
    e.preventDefault()
    logout()
  }

  const setGuestLoginInfo = (e: SyntheticEvent)  => {
    e.preventDefault()
    setUserLogin({email:"superstarnumber1@yopmail.com",password:"Superstar786@"})
  }

  return (
    <div>
      <form className='flex flex-col max-w-xs space-y-4'>
        <input type='email' className='border border-white border-2 rounded-md bg-black p-3' placeholder='email' onChange={e=>setUserLogin({...userLogin,email:e.target.value})} value={userLogin.email}/>
        <input type='password' className='border border-white border-2 rounded-md bg-black p-3' placeholder='password' onChange={e=>setUserLogin({...userLogin,password:e.target.value})} value={userLogin.password}/>
        <button type='submit' className='width-full p-3 bg-green-400 text-black font-lg rounded-lg' onClick={(e)=>handleSubmit(e)}>login</button>
        <button type='submit' className='width-full p-3 bg-green-400 text-black font-lg rounded-lg' onClick={(e)=>guestLogot(e)}>logout</button>
        <button onClick={(e)=>setGuestLoginInfo(e)}>Guest login</button>
      </form>
    </div>
  )
}

export default LoginScreen