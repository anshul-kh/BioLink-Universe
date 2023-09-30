import React,{useEffect, useState} from 'react'
import Line from '../assets/line.png'
import { Link, useLocation} from 'react-router-dom';
import { Edit, Share, About, Contact } from '../assets/sidebar';
import { Github } from '../assets';
import Footer from './Footer';
import {motion} from 'framer-motion'


const Sidebar = ({ closeToggle }) => {
    
  
  const location = useLocation();
  const [user, setUser] = useState();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getUser = localStorage.getItem('user');

    if (getUser && getUser !== null) {
      setUser(getUser.googleId);
    }

    const userId = location.pathname.split('/').pop();
    setUserId(userId)
  
  }, [location])

 



  return (
    <div className=' flex h-full flex-start font-patua no-scrollbar p-12 pt-28 gap-3 items-center  flex-col '>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .3 }} className='flex items-center justify-center flex-col'>
        <p className='text-3xl'>Operations Hub</p>
        <motion.img src={Line} alt="line" />
      </motion.div>
      {
        location.pathname.includes(`/user/`)   && (
          <motion.div whileHover={{ scale: 1.05, rotate: -8, transition: { delay: 0, duration: .3 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .3 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
            <Link to={`/edit/${userId}`} className='flex justify-center items-center flex-row gap-4'>
              <img src={Edit} alt="edit" className='w-10 h-10' />
              Tailor Your Profile
            </Link>
          </motion.div>
        )
      }

      <motion.div whileHover={{ scale: 1.05, rotate: -8, transition: { delay: 0, duration: .3 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .4 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl '>
        <Link className='flex flex-start items-center flex-row gap-4'>
          <motion.img animate={{ rotate: [0, 200, 200, 0] }} transition={{delay:0.7}} src={About} alt="about" className='w-10 h-10' />
          Platform Insights
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05, rotate: -8, transition: { delay: 0, duration: .3 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .5 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link className='flex flex-start items-center flex-row gap-4'>
          <motion.img src={Contact} alt="Contact" className='w-10 h-10' />
          Request assistance
        </Link>
      </motion.div>
      <motion.div whileHover={{scale:1.05,rotate:-8,transition:{delay:0,duration:.3}}} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5,delay:.6 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link  className='flex flex-start items-center flex-row gap-4'>
          <motion.img  src={Share} alt="Share" className='w-10 h-10 mr-2' />
          Share My Profile
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05, rotate: -8, transition: { delay: 0, duration: .3 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .7 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link className='flex flex-start items-center flex-row gap-4'>
          <motion.img   src={Github} alt="gitub" className='w-10 h-10' />
          Navigate to GitHub
        </Link>
      </motion.div>

      


      <div className='bottom-20 absolute flex w-full flex-col justify-center items-center gap-1 '>
        <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .8 }} className='text-xl'>Follow For More :-</motion.p>
        <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .8 }} src={Line} alt="line" />
        <Footer/>

        </div>

 </div>
  )
}

export default Sidebar
