import React from 'react';
import ResolvedTask from '../ResolvedTask.jsx/ResolvedTask';

const ResolvedTasks = ({resolvedTasks}) => {
    return (
        <div className='lg:mt-5 mt-2'>
            <h1 className='text-3xl font-semibold mb-2'>Resolved Task</h1>
            {
                resolvedTasks.map(task=><ResolvedTask 
                    key={task.id}
                    task={task}></ResolvedTask>)
            }
        </div>
    );
};

export default ResolvedTasks;