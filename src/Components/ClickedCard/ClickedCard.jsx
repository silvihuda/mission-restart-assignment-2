import React from 'react';
import { toast } from 'react-toastify';

const ClickedCard = ({ card,removedCard  }) => {
    const handleCompleteButton = () => {
          toast('Task of this ticket is done')
          removedCard(card)
        
    }
    return (
        <div className='lg:mt-6 mt-2'>
            <div className="card card-border bg-slate-50 w-full mt-2  space-y-2">
                <div className="card-body">
                    <h1 className="card-title truncate text-xl">{card.title}</h1>

                    <div className="card-actions">
                        <button onClick={()=>handleCompleteButton(card)} className='btn w-full bg-green-600 rounded-xl text-white'>Complete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClickedCard;