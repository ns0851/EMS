import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-[80%] p-6 font-medium w-[22%] bg-purple-400 rounded-xl relative'>
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 py-1 text-sm px-3 rounded ">{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className="my-2 font-bold text-2xl mt-7">{data.taskTitle}</h2>
            <p className="font-normal">{data.taskDescription}</p>
            <div className='flex justify-between mt-10 flex-col bottom-14 w-[87%] absolute gap-6'>
                <button className='bg-green-400 py-1 px-2 text-sm rounded-md'>Mark as Completed</button>
                <button className='bg-red-400 py-1 px-2 text-sm rounded-md'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask

// import React from 'react'

// const AcceptTask = ({data}) => {
//     console.log();
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
//             <div className='flex justify-between items-center'>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//                 {data.taskDescription}
//             </p>
//             <div className='flex justify-between mt-6 '>
//                 <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
//                 <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
//             </div>
//         </div>
//   )
// }

// export default AcceptTask