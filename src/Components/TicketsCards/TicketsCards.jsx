import React, { use } from 'react';
import TicketsCard from '../TicketsCard/TicketsCard';

const TicketsCards = ({promiseTickets}) => {
    const ticketsData = use(promiseTickets);
    // console.log(ticketsData)
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Customer Tickets</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-2 lg:mt-6 mt-2' >
               {
               ticketsData.map(ticket=>
               <TicketsCard key={ticket.id}
               ticket={ticket}></TicketsCard>)}
            </div>
        </div>
    );
};

export default TicketsCards;