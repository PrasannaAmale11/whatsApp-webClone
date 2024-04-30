"use client"
import { useMutation, useQuery } from 'convex/react'
import React, { useState } from 'react'
import { api } from '../../../convex/_generated/api'



const TasksPage = () => {
   const tasks =  useQuery(api.tasks.getTasks)
   const delTask = useMutation(api.tasks.deleteTask)
  

   
  return (
    <div className='p-10 flex flex-col gap-4'>
    <h1 className="text-5xl">
        All tasks are real time
    </h1>
    {tasks?.map((task)=>(
        <div className="flex gap-2" key={task._id}>
            <span>{task.text}</span>
            <button className=' bg-white text-black rounded-md p-3' onClick={async()=>{
                await delTask({ id: task._id});
            }}>Delete Task</button>
        </div>

    ))}



    </div>
  )
}

export default TasksPage