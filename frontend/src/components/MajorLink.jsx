import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MajorLink = ({icon,title,link}) => {
  return (
    <Link to={link} className='flex justify-center items-center bg-card md:w-3/6 rounded-2xl drop-shadow-xl w-96 h-20 relative'>
            <img src={icon} alt='icon' key={title} className='absolute left-12 bottom-6' />
            <motion.p whileHover={{scale:1.2}} className='relative  font-patua text-2xl'>{title}</motion.p>
            
    </Link>
  )
}

export default MajorLink
