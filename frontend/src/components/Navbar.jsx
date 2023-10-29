import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';
import { Delete } from '../assets/sidebar';
import { motion } from 'framer-motion';


const Navbar = () => {
     const navigate = useNavigate();

     const [toggleSidebar, setToggleSidebar] = useState(false);

     const handleSidebar = () => {
        setToggleSidebar(!toggleSidebar)  
     }

     return (
          <div className='flex items-center  md:justify-between justify-between  md:ml-10 w-full  h-16 md:fixed relative bg-transparent md:top-5 ' style={{ zIndex: 999 }}>
               <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .5 }}  className=' md:ml-9  ml-4 md:p-2 top-5  flex text-center justify-center items-center'>
                   
                    <img src={Logo} alt="logo" className='cursor-pointer md:w-40 md:h-26
                    w-28  h-18 ' onClick={
                         () => navigate('/')} />
                    

               </motion.div>


               <div className='flex flex-row gap-2 md:gap-12 font-display text-xl md:text-3xl items-center md:px-9 md:mr-10  mr-5 justify-center '>
                    
                    <motion.button animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .9 }} onClick={handleSidebar} >
                         <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 md:w-16 md:16' viewBox="0 0 50 50" fill="none">
                              <circle cx="25" cy="25" r="25" fill="#D9D9D9" opacity='0.5' />
                              <path d="M37.273 27.8636C38.1014 27.8636 38.773 27.1921 38.773 26.3636C38.773 25.5352 38.1014 24.8636 37.273 24.8636V27.8636ZM7.27295 27.8636L37.273 27.8636V24.8636L7.27295 24.8636V27.8636Z" fill="black" />
                              <path d="M36.8184 35.1364C37.6468 35.1364 38.3184 34.4648 38.3184 33.6364C38.3184 32.8079 37.6468 32.1364 36.8184 32.1364V35.1364ZM11.8184 35.1364H36.8184V32.1364H11.8184V35.1364Z" fill="black" />
                              <path d="M41.3638 20.5909C42.1922 20.5909 42.8638 19.9194 42.8638 19.0909C42.8638 18.2625 42.1922 17.5909 41.3638 17.5909V20.5909ZM16.3638 20.5909H41.3638V17.5909H16.3638V20.5909Z" fill="black" />
                         </svg>
                    </motion.button>
                   
               </div>


               {toggleSidebar && (
                    <div className='fixed md:w-1/4 w-full bg-white h-screen overflow-y-auto shadow-md  animate-slide-in right-0 top-0' style={{ zIndex: 999 }}>
                         <div className='absolute w-full flex justify-end items-center p-2 right-5 top-3 z-50' >
                              <motion.img whileHover={{ scale: 1.1, rotate: 360, transition: { delay: 0, duration: .4 } }} animate={{ scale: 1.1, rotate: [0,360,360,0], }} initial={{ scale: .7 }} transition={{duration:1}} src={Delete} alt="close" className='md:w-14 md:h-14  w-10 h-10 cursor-pointer' onClick={() => setToggleSidebar(false)}/>

                              
                             
                         </div>
                         <Sidebar closeToggle={setToggleSidebar}/>
                    </div>

               )}





          </div>
     )
}

export default Navbar
