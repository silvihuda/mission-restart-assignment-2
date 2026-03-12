import React from 'react';

const ResolvedTask = ({task}) => {
    return (
        <div className='mt-2'>
            <p className='bg-blue-100 text-2xl lg:p-4 p-2 rounded-xl'>{task.title}</p>
        </div>
    );
};

export default ResolvedTask;