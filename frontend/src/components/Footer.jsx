import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {LinkedIn,Github,Twitter,Line} from "../assets/Footer/index" 

const Footer = ({className}) => {
  return (
       <motion.div  className={className}>
      
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .7 }} className='flex justify-center items-center'>
                 <Link to={"https://github.com/anshul-kh/BioLink-Universe"}><img className='w-14 h-14' src={Github} alt="github" /></Link>
            </motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .7 }}><img src={Line} alt="line" /></motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .8 }} className=' flex justify-center items-center'>
                 <Link ><img className='w-14 h-14' src={Twitter} alt="twitter" /></Link>
            </motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .8 }}><img src={Line} alt="line" /></motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .9 }} className=' flex justify-center items-center'>
                 <Link><img className='w-14 h-14' src={LinkedIn} alt="linkedin" /></Link>
            </motion.div>
    </motion.div>
  )
}

export default Footer
