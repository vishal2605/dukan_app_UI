import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PaymentCard from './component/PaymentCard'
import { Navbar } from './component/Navbar'
import Sidebar from './component/SideBar';
import { Overview } from './component/Overview';
import { TransactionTable } from './component/TransactionTable';

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <div className='my-5 bg-white-50'>
      <Sidebar/>
      <div className="border-b border-black-150 sm:pl-64 bg-white-500 p-2">
        <Navbar />
      </div>
      <div className='sm:pl-64 p-5'>
        <Overview/>
        <TransactionTable/>
      </div>
    </div>
  )
}

export default App
