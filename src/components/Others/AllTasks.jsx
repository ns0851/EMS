import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex text-center justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>
      <div className=''>
        {userData?.map((elem, idx) => {
          // Skip the iteration if firstName is missing
          if (!elem?.firstName) return null;

          const firstName = elem.firstName;
          const newTask = elem?.taskCount?.newTask || 0;
          const active = elem?.taskCount?.active || 0;
          const completed = elem?.taskCount?.completed || 0;
          const failed = elem?.taskCount?.failed || 0;

          return (
            <div key={idx} className='border-2 text-center  border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
              <h2 className='text-lg text-white font-medium w-1/5'>{firstName}</h2>
              <h3 className='text-lg font-medium w-1/5 text-blue-400'>{newTask}</h3>
              <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{active}</h5>
              <h5 className='text-lg font-medium w-1/5 text-green-400'>{completed}</h5>
              <h5 className='text-lg font-medium w-1/5 text-red-600'>{failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
