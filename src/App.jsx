
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
 
  return (
    <>
      <Navbar></Navbar>
      <Banner clickedCards={clickedCards}></Banner>
      
       <Suspense>
        <Tickets promiseTickets={promiseTickets}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}></Tickets>
       </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
