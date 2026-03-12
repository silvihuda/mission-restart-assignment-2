
import TicketsCard from '../TicketsCard/TicketsCard';

const TicketsCards = ({clickedCards,setClickedCards,ticketCards}) => {
   
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Customer Tickets</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-2 lg:mt-6 mt-2' >
               {
              ticketCards.map(ticket=>
               <TicketsCard key={ticket.id}
               ticket={ticket}
               clickedCards={clickedCards}
               setClickedCards={setClickedCards}
             ></TicketsCard>)}
            </div>
        </div>
    );
};

export default TicketsCards;