import React from 'react';
import { toast } from 'react-toastify';

const TicketsCard = ({ticket,clickedCards,setClickedCards, removedCard}) => {
    const handleClickedCard = () =>{
        setClickedCards([...clickedCards,ticket])
        toast('This card is in progress')
    }
// {
//     "id": "#1011",
//     "title": "Incorrect total in cart",
//     "description": "Cart total sometimes shows the wrong amount after discount applied.",
//     "customer": "Irene Lopez",
//     "priority": "HIGH PRIORITY",
//     "status": "In Progress",
//     "createdAt": "27-02-2026"
//   },
    return (
        <div className=''>
             <div onClick={handleClickedCard} className="card w-full  bg-slate-50">
                    <div className="card-body space-y-4">
                        <div className='flex lg:flex-row flex-col justify-between items-center gap-2'>
                            <h1 className="card-title">{ticket.title}</h1>
                            <button className={`btn rounded-2xl ${ticket.status==="Open"?"text-green-400 bg-green-200":"text-orange-400 bg-orange-200"}`}><i className="fa-solid fa-circle "></i>{ticket.status}</button>
                        </div>
                        <p>{ticket.description}</p>
                        <div className="card-actions flex lg:flex-row flex-col justify-between gap-2">
                            <div className='flex items-center justify-center '>
                                <span>{ticket.id}</span>
                                <span className={`ml-2 ${ticket.priority==="HIGH PRIORITY"?"text-red-500":"text-orange-400"}`}>{ticket.priority}</span>
                            </div>
                            <div className='flex items-center justify-center gap-2 flex-wrap'>
                                <span>{ticket.customer}</span>
                                <span className='ml-2'><i className="fa-solid fa-calendar mr-1"></i>{ticket.createdAt}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default TicketsCard;