import React from 'react'
import Home_prof from './Home_prof'
import Line from '../assets/line.png'
import Plus from '../assets/Ellipse 4.png'

const Home = () => {
     return (
          <div>
          <div className='flex flex-col  justify-start  gap-12  w-1/2 absolute top-1/4 left-32 '>
               <div className='font-roboto flex flex-row items-center gap-2 text-2xl'>
                    Step Forward
                    <div>
                         <img src={Line} alt="line" />
                    </div>
               </div>
               <div className='font-patua flex-col text-9xl'>
                    <p className='drop-shadow-2xl'>Mold Your </p>
                    <p>
                         Bio Aesthetic.
                    </p>
               </div>
               <button className='flex flex-row  items-center gap-4 font-roboto text-2xl font-bold text-gray-600'>
                    <div>
                         <img src={Plus} alt="get-started" />
                    </div>
                    <div>
                         Get Started
                    </div>
               </button>

               

               </div>
               <Home_prof />
          </div>
     )
}

export default Home
