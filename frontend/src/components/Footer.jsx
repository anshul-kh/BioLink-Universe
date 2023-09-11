import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-2 fixed bottom-5 right-7 md:bottom-10 md:right-24 md:text-2xl font-footer '>
      
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
    </div>
  )
}

export default Footer
