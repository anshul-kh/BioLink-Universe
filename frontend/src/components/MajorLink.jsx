import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MajorLink = ({icon,title,link}) => {
  return (
    <Link to={link} className='flex  md:justify-center justify-around md:p-0 p-5  items-center bg-card md:w-3/6 rounded-2xl drop-shadow-xl w-3/4 md:h-20 h-16 relative'>
            <motion.img whileHover={{scale:1.2 , transition:{duration:.4}}} src={icon} alt='icon' key={title} className='md:absolute md:left-12 z-100 md:bottom-4 md:w-20 md:h-20 w-14 h-14' />
      <motion.p whileHover={{ scale: 1.2, transition: { duration: .4 } }} className='relative  font-patua text-xl md:text-2xl '>{title}</motion.p>
      
            
    </Link>
  )
}

export default MajorLink
