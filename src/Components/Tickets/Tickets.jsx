
import ResolvedTasks from '../ResolvedTasks/ResolvedTasks';
import TaskStatus from '../TaskStatus/TaskStatus';
import TicketsCards from '../TicketsCards/TicketsCards';

    
const Tickets = ({promiseTickets,clickedCards,setClickedCards,removedCard,resolvedTasks }) => {

    return (
       <div className='max-w-[1280px] mx-auto'>
         <div className='flex lg:flex-row flex-col justify-between lg:gap-4 gap-2 lg:mt-6 mt-2'>
         
             <TicketsCards promiseTickets={promiseTickets}
             clickedCards={clickedCards}
             setClickedCards={setClickedCards}
             removedCard={removedCard}></TicketsCards>
             <div>
                <TaskStatus clickedCards={clickedCards}
                removedCard ={removedCard }></TaskStatus>
               <ResolvedTasks resolvedTasks={resolvedTasks}></ResolvedTasks>
             </div>
             
          
        </div>
       </div>
    );
};

export default Tickets;