import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <div className="flex h-screen w-screen justify-center items-center">
                <div className='border-2 border-emerald-600 rounded-xl p-20'>
                    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col justify-center items-center'>
                        <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your Mail' className='bg-transparent border-2 border-emerald-600 font-medium text-lg text-gray-400 py-2 px-6 rounded-full' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='Enter Password' className='bg-transparent border-2 border-emerald-600 font-medium text-lg text-gray-400 py-2 px-6 rounded-full mt-3' />
                        <button type='submit' className='text-white py-2 px-7 mt-6 hover:bg-emerald-700 w-full border-none outline-none text-lg rounded-3xl font-semibold bg-emerald-600'>Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login