
import { Suspense } from 'react'
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
 
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      
       <Suspense>
        <Tickets promiseTickets={promiseTickets}></Tickets>
       </Suspense>
      
    </>
  )
}

export default App
