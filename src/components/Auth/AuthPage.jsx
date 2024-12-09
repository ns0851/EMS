import React from 'react'
import Login from './Login'
import Register from './Register'

const AuthPage = ({ handleLogin }) => {
    return (
        <div className='flex'>
            <Register />
            
            <Login handleLogin={handleLogin} />
        </div>

    )
}

export default AuthPage