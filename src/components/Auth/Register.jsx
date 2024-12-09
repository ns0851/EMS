import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Register = () => {
  const [name, setName] = useState('Satya')
  const [email, setEmail] = useState('satya@me.com')
  const [password, setPassword] = useState('123')
  const [data, setData] = useState({})


  const handleRegister = (e) => {
    e.preventDefault()
    setData({ "firstName": name, "email": email, "password":password})
    const existingData = JSON.parse(localStorage.getItem('employees')) || [];
    existingData.push(data)
    localStorage.setItem('employees', JSON.stringify(existingData));
    alert('registered')
  }

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
          <form onSubmit={(e) => { handleRegister(e) }} className='flex flex-col justify-center items-center'>
            <input value={name} required onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your Name' className='bg-transparent border-2 border-emerald-600 font-medium text-lg text-gray-400 py-2 px-6 rounded-full mb-3' />
            <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your Mail' className='bg-transparent border-2 border-emerald-600 font-medium text-lg text-gray-400 py-2 px-6 rounded-full' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='Enter Password' className='bg-transparent border-2 border-emerald-600 font-medium text-lg text-gray-400 py-2 px-6 rounded-full mt-3' />
            <button type='submit' className='text-white py-2 px-7 mt-6 hover:bg-emerald-700 w-full border-none outline-none text-lg rounded-3xl font-semibold bg-emerald-600'>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register