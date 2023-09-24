import React from 'react'
import { Link } from 'react-router-dom'

const MinorLink = ({ title,link}) => {
  return (
    <Link to={link} className='flex justify-center items-center bg-card rounded-2xl md:w-3/6 drop-shadow-xl w-96 h-20 text-center relative'>
      <p className='relative right-7 text-center font-patua text-2xl'>{title}</p>
     
    </Link>
  )
}

export default MinorLink
