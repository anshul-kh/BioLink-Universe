import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {LinkedIn,Github,Twitter,Line} from "../assets/Footer/index" 

const Footer = ({className}) => {
  return (
       <motion.div  className={className}>
      
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .7 }} className='flex justify-center items-center'>
                 <Link to={"https://github.com/anshul-kh/"}><img className='md:w-14 md:h-14 h-10 w-10' src={Github} alt="github" /></Link>
            </motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .7 }}><img src={Line} alt="line" className='md:h-auto h-8'/></motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .8 }} className=' flex justify-center items-center'>
                 <Link to={'https://twitter.com/ItzKhAnshul'}><img className='md:w-14 md:h-14 h-10 w-10' src={Twitter} alt="twitter" /></Link>
            </motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .8 }}><img src={Line} alt="line" className='md:h-auto h-8' /></motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .9 }} className=' flex justify-center items-center'>
                 <Link to={"https://www.linkedin.com/in/anshul-o4"}><img className='md:w-14 md:h-14 h-10 w-10' src={LinkedIn} alt="linkedin" /></Link>
            </motion.div>
    </motion.div>
  )
}

export default Footer
