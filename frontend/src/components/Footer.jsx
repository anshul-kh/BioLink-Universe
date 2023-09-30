import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
       <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .5 }} className='flex flex-row justify-center items-center gap-2 fixed bottom-5 right-7 md:bottom-10 md:right-24 md:text-2xl font-footer '>
      
            <div className=''>
                 <a href="">GitHub</a>
            </div>
            <p>|</p>
            <div className=''>
                 <a href="">Twitter</a>
            </div>
            <p>|</p>
            <div className=''>
                 <a href="">LinkedIn</a>
            </div>
    </motion.div>
  )
}

export default Footer
