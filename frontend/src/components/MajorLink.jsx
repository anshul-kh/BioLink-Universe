import React from 'react'
import { Link } from 'react-router-dom'

const MajorLink = ({icon,title,link}) => {
  return (
    <Link to={link} className='flex justify-center items-center bg-card md:w-3/6 rounded-2xl drop-shadow-xl w-96 h-20 relative'>
            <img src={icon} alt='icon' key={title} className='absolute left-12 bottom-6' />
            <p className='relative right-7 font-patua text-2xl'>{title}</p>
            
    </Link>
  )
}

export default MajorLink
