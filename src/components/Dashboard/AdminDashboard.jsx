import React from 'react'
import Header from '../Others/Header'
import CreateForm from '../Others/CreateForm'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = ({data, changeUser}) => {
    return (
        <>
            <div className='text-white p-10'>
                <Header changeUser={changeUser} data={data} />
            </div>
            <CreateForm />
            <AllTasks />



        </>
    )
}

export default AdminDashboard