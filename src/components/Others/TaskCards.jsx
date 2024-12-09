import React from 'react';

const TaskCards = ({ data }) => {
  // Set default values for taskCount if data or taskCount is missing
  const taskCount = data?.taskCount || {
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0
  };

  return (
    <div className='screen flex mt-10 justify-between gap-5 p-10'>
      <div className='h-40 w-[45%] py-7 p-9 font-medium bg-blue-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='h-40 w-[45%] py-7 p-9 font-medium bg-green-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='h-40 w-[45%] py-7 p-9 font-medium bg-yellow-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Tasks</h3>
      </div>
      <div className='h-40 w-[45%] py-7 p-9 font-medium bg-red-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskCards;
