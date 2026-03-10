import TicketsCards from '../TicketsCards/TicketsCards';

    
const Tickets = ({promiseTickets}) => {
    
    return (
       <div className='max-w-[1280px] mx-auto'>
         <div className='flex justify-between grow mt-6'>
         
             <TicketsCards promiseTickets={promiseTickets}></TicketsCards>
             <div>
                task
             </div>
          
        </div>
       </div>
    );
};

export default Tickets;