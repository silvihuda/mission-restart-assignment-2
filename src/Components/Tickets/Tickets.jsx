import TaskStatus from '../TaskStatus/TaskStatus';
import TicketsCards from '../TicketsCards/TicketsCards';

    
const Tickets = ({promiseTickets,clickedCards,setClickedCards}) => {
    
    return (
       <div className='max-w-[1280px] mx-auto'>
         <div className='flex justify-between lg:gap-4 mt-6'>
         
             <TicketsCards promiseTickets={promiseTickets}
             clickedCards={clickedCards}
             setClickedCards={setClickedCards}></TicketsCards>
             <div>
                <TaskStatus clickedCards={clickedCards}></TaskStatus>
             </div>
          
        </div>
       </div>
    );
};

export default Tickets;