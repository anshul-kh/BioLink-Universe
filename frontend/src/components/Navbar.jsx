import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai';
import Sidebar from './Sidebar';

const Navbar = () => {
     const navigate = useNavigate();

     const [toggleSidebar, setToggleSidebar] = useState(false);

     const handleSidebar = () => {
        setToggleSidebar(!toggleSidebar)  
     }

     return (
          <div className='flex items-center justify-between px-5 w-full  h-16 fixed bg-transparent top-2'>
               <div className='p-1 md:p-2 flex text-center justify-center items-center'>
                    <p className='text-black text-center font-normal cursor-pointer text-3xl font-display md:text-4xl' onClick={
                         ()=>navigate('/')
                    }>Bio_Links</p>
               </div>


               <div className='flex flex-row gap-2 md:gap-12 font-display text-xl md:text-3xl items-center md:px-9 justify-center'>
                    <div className='invisible md:visible'>
                         About
                    </div>
                    <div className='invisible md:visible'>
                         Contact
                    </div>
                    <button onClick={handleSidebar} >
                         <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                              <circle cx="25" cy="25" r="25" fill="#D9D9D9" opacity='0.5' />
                              <path d="M37.273 27.8636C38.1014 27.8636 38.773 27.1921 38.773 26.3636C38.773 25.5352 38.1014 24.8636 37.273 24.8636V27.8636ZM7.27295 27.8636L37.273 27.8636V24.8636L7.27295 24.8636V27.8636Z" fill="black" />
                              <path d="M36.8184 35.1364C37.6468 35.1364 38.3184 34.4648 38.3184 33.6364C38.3184 32.8079 37.6468 32.1364 36.8184 32.1364V35.1364ZM11.8184 35.1364H36.8184V32.1364H11.8184V35.1364Z" fill="black" />
                              <path d="M41.3638 20.5909C42.1922 20.5909 42.8638 19.9194 42.8638 19.0909C42.8638 18.2625 42.1922 17.5909 41.3638 17.5909V20.5909ZM16.3638 20.5909H41.3638V17.5909H16.3638V20.5909Z" fill="black" />
                         </svg>
                    </button>
                   
               </div>


               {toggleSidebar && (
                    <div className='fixed w-1/4 bg-white h-screen overflow-y-auto shadow-md z-50 animate-slide-in right-0 top-0'>
                         <div className='absolute w-full flex justify-end items-center p-2'>

                              <AiFillCloseCircle fontSize={30} className='cursor-pointer' onClick={() => setToggleSidebar(false)} />
                             
                         </div>
                         <Sidebar/>
                    </div>

               )}





          </div>
     )
}

export default Navbar
