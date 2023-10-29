import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MinorLink = ({ title, link }) => {
  return (
    <Link to={link} className='flex justify-center items-center bg-card rounded-2xl md:w-3/6 drop-shadow-xl w-3/4 h-16 md:h-20 text-center relative'>

      <motion.p whileHover={{ scale: 1.2 }} className='relative text-center font-patua text-xl md:text-2xl'>{title}</motion.p>

    </Link>
  )
}

export default MinorLink
