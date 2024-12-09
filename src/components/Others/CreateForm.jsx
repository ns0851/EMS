import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('Do IT')
    const [taskDescription, setTaskDescription] = useState('Just Do it')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('Category')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach((elem)=> {
            if(elem.firstName === asignTo){
                
            const storedData = JSON.parse(localStorage.getItem('employees')) || [];

            const employee = storedData.find((elem) => elem.firstName === asignTo);

            if (employee) {
                if (!employee.tasks) {
                    employee.tasks = []; 
                }
                if (!employee.taskCount) {
                    employee.taskCount = { newTask: 0, completed: 0, active: 0, failed: 0 }; // Initialize taskCount with default values
                }

                // Add new task to the employee's tasks
                employee.tasks.push(newTask);

                // Increment the newTask count
                employee.taskCount.newTask = employee.taskCount.newTask + 1;

                // Save the updated employee data back to localStorage
                localStorage.setItem('employees', JSON.stringify(storedData));
            }
        }

        })
        setUserData(data)
        alert('Task Added!!')

        // setTaskTitle('')
        // setCategory('')
        // setAsignTo('')
        // setTaskDate('')
        // setTaskDescription('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent text-white border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className="className='text-sm text-gray-300 mb-0.5">Assign To</h3>

                        <select
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className=" text-white bg-transparent border-[1px] cursor-pointer outline-none border-gray-400 rounded p-1 w-[80%] mb-4"
                        >
                            <option className='text-black hover:bg-gray-500' value="">Select an Employee</option>
                            {userData.map((e, idx) => {
                                if (!e?.firstName) return null;
                                return (
                                    <option className="text-black hover:bg-gray-500" key={idx} value={e.firstName}>
                                        {e.firstName}
                                    </option>)
                            })}
                        </select>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none text-white bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        placeholder='Description of the Task'
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none text-white bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 text-black font-bold py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask