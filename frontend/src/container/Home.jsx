import React from 'react'
import Homeprof from './Homeprof'
import Line from '../assets/line.png'
import Plus from '../assets/Ellipse 4.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Home = () => {
     const navigate = useNavigate();

     return (
          
        
          <div className='z-10'>
              
               <div className='flex flex-col  justify-start   gap-20  w-1/2 absolute top-1/4 left-32 '>
                    <motion.div className='font-roboto flex flex-row items-center gap-2 text-3xl' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .3 }}>
                         Step Forward
                         <div>
                              <img src={Line} alt="line" />
                         </div>
                    </motion.div>
                    <motion.div  className='font-patua flex-col text-9xl'>
                         <motion.div animate={{opacity:1}}  initial={{opacity:0}} transition={{duration:1,delay:.5}}>
                              Mold Your
                         </motion.div>
                         <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1,delay:.8 }} >
                              Bio Aesthetic.
                         </motion.div>
                    </motion.div>
                    <motion.button className='flex  w-64  flex-row  items-center gap-4 font-roboto text-2xl font-bold text-gray-600 overflow-hidden'
                         onClick={() => {
                              navigate('/login');
                    }}
                         animate={{ opacity: 1 }}  initial={{ opacity: 0 }} transition={{ duration: 1, delay: .9 }} >
                         <motion.div whileHover={{rotate:360}} transition={{duration:.9}}>
                              <img src={Plus} alt="get-started" />
                         </motion.div>
                         <motion.div className='text-3xl font-roboto' whileHover={{scale:1.1}}>
                              Get Started
                         </motion.div>
                    </motion.button>



               </div>

               <Homeprof />
               <Footer className={'flex flex-row justify-center items-center gap-4 fixed bottom-5 right-7 md:bottom-10 md:right-24 md:text-2xl font-footer '}/>
          </div>
     )
}

export default Home
