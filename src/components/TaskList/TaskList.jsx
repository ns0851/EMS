// import React from 'react'

import { useEffect } from "react"
import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({ data }) => {

    if (!data || !data.tasks) {
        return <>
            <h1 className="h-screen text-5xl text-center pt-[25vh]">No Tasks Assigned Yet</h1>
        </>;
    }

    useEffect(() => {
      
    }, [data])
    

    return (
        <div id="tasks" className='h-[50vh] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-[98%] pl-10 py-1 mt-10'>
            {data.tasks.map((e, idx) => {
                if (e.newTask) {
                    return <NewTask key={idx} data={e} />
                }
                if (e.completed) {
                    return <CompleteTask key={idx} data={e} />
                }
                if (e.failed) {
                    return <FailedTask key={idx} data={e} />

                }
                if (e.active) {
                    return <AcceptTask key={idx} data={e} />
                }
            })}

        </div>
    )
}

export default TaskList