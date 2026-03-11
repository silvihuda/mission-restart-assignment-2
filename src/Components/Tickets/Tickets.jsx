import TaskStatus from '../TaskStatus/TaskStatus';
import TicketsCards from '../TicketsCards/TicketsCards';

    
const Tickets = ({promiseTickets,clickedCards,setClickedCards}) => {
    
    return (
       <div className='max-w-[1280px] mx-auto'>
         <div className='flex lg:flex-row flex-col justify-between lg:gap-4 gap-2 lg:mt-6 mt-2'>
         
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