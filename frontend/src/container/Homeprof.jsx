import React from 'react'
import Prof1 from '../assets/Prof_1.png'
import Prof2 from '../assets/home_2.png'
import Prof3 from '../assets/home_3.png'

const Home_prof = () => {
  return (
       <div className='-z-10  top-32 md:absolute md:right-40 flex  flex-col md:flex-row justify-center items-center md:gap-5 drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]'>
            <div className='hover:filter-none hover:scale-110 transition-all duration-500 drop-shadow-[0_25px_25px_rgba(0,0,0,0.05)]'>
                 <img src={Prof1} alt="prof_1" />
           </div>
            <div className='flex flex-col gap-5'>
                 <div className='hover:filter-none transition-all duration-500 hover:scale-110 drop-shadow-[0_25px_25px_rgba(0,0,0,0.03)]'>
                      <img src={Prof2} alt="prof_1" />
                 </div>
                 <div className='hover:filter-none transition-all duration-500 hover:scale-110 drop-shadow-[0_25px_25px_rgba(0,0,0,0.03)]'>
                      <img src={Prof3} alt="prof_1" />
                 </div>
           </div>
    </div>
  )
}

export default Home_prof
