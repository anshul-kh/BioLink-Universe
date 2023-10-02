import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const randomImg = 'https://source.unsplash.com/1600x900/?night,aesthetic,photography,technologgy/';
  

  return (
    <div className='w-full mt-14 flex flex-col justify-center items-center'>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .2 }} className='flex justify-center flex-col items-center bg-card md:w-5/6 rounded-2xl drop-shadow-xl   h-96 object-contain  relative overflow-hidden'>
        <img src={randomImg} alt="banner" />
        <p>
          About Us
        </p>
      </ motion.div>
    </div>
  )
}

export default About
