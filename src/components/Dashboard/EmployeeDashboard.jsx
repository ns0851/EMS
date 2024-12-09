import React, { useEffect } from 'react'
import Header from '../Others/Header'
import TaskCards from '../Others/TaskCards'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data, changeUser}) => {
  // window.location.reload()
  useEffect(() => {
    
  }, [])
  
  return (
    <div className='text-white p-10 bg-[#1c1c1c]'>
      {/* <h1>{data.id}</h1> */}
      <Header data={data} changeUser = {changeUser}/>
      <TaskCards data={data}/>
      <TaskList data={data}/> 
    </div>
  )
}

export default EmployeeDashboard