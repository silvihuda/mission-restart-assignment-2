import React from 'react';
import ClickedCard from '../ClickedCard/ClickedCard';

const TaskStatus = ({ clickedCards,removedCard,handleTicketCards }) => {
    // console.log(clickedCards)
    return (
        <div>
             <h1 className='text-3xl font-semibold'>Task Status</h1>
            {
                clickedCards.map(card=>
                    <ClickedCard 
                    key={card.id}
                    card={card}
                    removedCard ={removedCard }
                    handleTicketCards={handleTicketCards}></ClickedCard>
                )
            }
        </div>
    );
};

export default TaskStatus;