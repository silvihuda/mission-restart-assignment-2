
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets'
const fetchPromise = async() =>{
  const res = await fetch('/tickets.json')
  return res.json();
}
const promiseTickets = fetchPromise();

function App() {
  const [clickedCards,setClickedCards] = useState([])
  const [resolvedTasks,setResolvedTasks] = useState([])
 const removedCard = (card) =>{
    const resolvedList = clickedCards.filter(task=>task.id!==card.id)
    setClickedCards(resolvedList)
    setResolvedTasks(prev=>[...prev,card])
    // console.log(resolvedTasks)
 }
 
  return (
    <>
      <Navbar></Navbar>
      <Banner clickedCards={clickedCards}
      resolvedTasks={resolvedTasks}
      ></Banner>
      
       <Suspense>
        <Tickets promiseTickets={promiseTickets}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        removedCard={removedCard}
        resolvedTasks={resolvedTasks}></Tickets>
       </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
