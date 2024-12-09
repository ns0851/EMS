import React from 'react'

const Header = ({changeUser}) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    changeUser('')
  }
  return (
    <div className='text-white flex justify-between items-end '>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl'>{/*data.firstName*/} User 👋</span></h1>
        <button onClick={logoutUser} className='bg-red-600 text-lg font-medium py-2 px-6 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header