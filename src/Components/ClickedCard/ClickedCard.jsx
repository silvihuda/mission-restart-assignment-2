import React from 'react';

const ClickedCard = ({card}) => {
    return (
        <div className='lg:mt-6 mt-2'>
            <div className="card card-border bg-slate-50 w-full h-full mt-2 px-2 space-y-2">
                <div className="card-body">
                    <h1 className="card-title text-xl">{card.title}</h1>

                    <div className="card-actions">
                        <button className='btn w-full bg-green-600'>Complete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClickedCard;