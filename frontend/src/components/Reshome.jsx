import React from 'react'
import { Line, Banner, Prof_1, Prof_2, Prof_3 } from '../assets/reshome/export'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Reshome = () => {
     const navigate = useNavigate();
  return (
    <div className='md:hidden flex flex-col justify-start gap-7 w-screen px-5 h-screen overflow-hidden'>
            <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .3 }} src={Line} alt="line" className='w-1/4' />
            <div className='flex flex-col justify-center items-center'>
                 <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .3 }} src={Banner} alt="banner" />
                 <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .4 }} className='text-center  text-2xl mt-3 font-patua'>Mold Your Bio Aesthetic.</motion.p>
                 <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .5 }} className='flex flex-row justify-center items-center '>
                      <img src={Prof_1} alt="prof_1" className=''/>
                      <img src={Prof_2} alt="prof_2" className='mt-16'/>
                 </motion.div>
                 <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .6 }} src={Prof_3} alt="prof_3" className='mr-8' />
                 <motion.button animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .7 }} type="submit" onClick={() => {
                      navigate('/login');
                 }} className='flex justify-center items-center bg-black text-white font-roboto rounded-3xl  drop-shadow-xl mt-5 w-5/6 h-12 text-center relative text-2xl'>
                      Get Started
                 </motion.button>
            </div>
            <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .8 }} src={Line} alt="line" className='w-1/4 right-2 absolute -bottom-16' />
    </div>
  )
}

export default Reshome
