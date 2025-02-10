import React from 'react'
import './App.css'
import { MdOutlineMailOutline } from "react-icons/md";
import reactLogo from './assets/logo.png'
import { PiPhoneCall } from 'react-icons/pi';

function App() {

  return (
    <div className='app'>
      {/* <div className="w-full h-48 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 animate-gradient"></div> */}
      <div>
        <a href="https://mahran.sa" target="_blank" className=''>
          <img src={reactLogo} className="logo react " alt="React logo" />
        </a>
      </div>
      <div >
        <h3 className="typewriter ">شركة مهران للخدمات اللوجستية ذات مسؤولية محدودة</h3>
      </div>
      <div className="">
        <p className="flex  text-red-700 gap-1 font-bold items-center justify-center space-x-2">
          <MdOutlineMailOutline className='icon' />
          <a href="mailto:info@mahran.sa" >info@mahran.sa</a>
        </p>
        <div dir='rtl' className='flex gap-2 items-center justify-center space-x-4 '>
          <p className="gap-1 font-bold">
            س.ت /
            <a href="tel:+1010638696" className='font-bold'> 1010638696</a>
          </p>
          <p className="gap-1 text-blue-600 font-semibold">
            ت /
            <a href="tel:+0114466604" className='text-blue-400'> 0114466604</a>
          </p>
          <p className="gap-1 item-center font-semibold">
            <PiPhoneCall/>
            <a href="tel:+966590304280"> 0590304280</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
