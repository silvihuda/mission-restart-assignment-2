import React from 'react';
import { toast } from 'react-toastify';

const ClickedCard = ({ card,removedCard,handleTicketCards }) => {
    const handleCompleteButton = () => {
          toast('This ticket is resolved')
          removedCard(card);
          handleTicketCards(card)
        
    }
    return (
        <div className='lg:mt-6 mt-2'>
            <div className="card card-border bg-slate-50 w-full mt-2  space-y-2">
                <div className="card-body">
                    <h1 className="card-title truncate text-xl">{card.title}</h1>

                    <div className="card-actions">
                        <button onClick={handleCompleteButton} className='btn w-full bg-green-600 rounded-xl text-white'>Complete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClickedCard;