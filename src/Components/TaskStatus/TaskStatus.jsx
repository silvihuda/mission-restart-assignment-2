import React from 'react';
import ClickedCard from '../ClickedCard/ClickedCard';

const TaskStatus = ({ clickedCards}) => {
    // console.log(clickedCards)
    return (
        <div>
             <h1 className='text-3xl font-semibold'>Task Status</h1>
            {
                clickedCards.map(card=>
                    <ClickedCard card={card}></ClickedCard>
                )
            }
        </div>
    );
};

export default TaskStatus;