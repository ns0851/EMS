import React from 'react';

const NewTask = ({ data }) => {
  // Default values for the data if it is undefined or empty
  const { category = 'Uncategorized', taskDate = 'Not Set', taskTitle = 'No Title', taskDescription = 'No Description' } = data || {};

  return (
    <div className='flex-shrink-0 h-[80%] p-6 font-medium w-[22%] bg-orange-400 rounded-xl relative'>
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 py-1 text-sm px-3 rounded">{category}</h3>
        <h4>{taskDate}</h4>
      </div>
      <h2 className="my-2 font-bold text-2xl mt-7">{taskTitle}</h2>
      <p className="font-normal">{taskDescription}</p>
      <div className='mt-[5vh] bg-red-500 text-center rounded-md absolute bottom-20 w-[87%]'>
        <button className='py-1 px-2'>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
