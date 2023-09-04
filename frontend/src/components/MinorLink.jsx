import React from 'react'

const MinorLink = ({title}) => {
  return (
    <div className='flex justify-center items-center bg-card rounded-2xl md:w-3/6 drop-shadow-xl w-96 h-20 relative'>
      <p className='relative right-7 font-patua text-2xl'>{title}</p>

    </div>
  )
}

export default MinorLink
