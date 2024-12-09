import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-[80%] p-6 font-medium w-[22%] bg-red-400 rounded-xl relative'>
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 py-1 text-sm px-3 rounded ">{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className="my-2 font-bold text-2xl mt-7">{data.taskTitle}</h2>
            <p className="font-normal">{data.taskDescription}</p>
            <div className='mt-[5vh] text-center rounded-md absolute w-[87%] bottom-20'>
                <h1 className='py-1 px-2 text-2xl font-bold'>Failed</h1>
            </div>
        </div>
  )
}

export default FailedTask