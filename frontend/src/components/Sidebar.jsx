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


  const shareUrl = () => {
    const url = window.location.href;
    const maxLength = 2000; // Maximum length for clipboard data (adjust as needed)

    if (url.length <= maxLength) {
      navigator.clipboard.writeText(url)
        .then(() => {
          alert('Link Copied to Clipboard');
        })
        .catch((error) => {
          console.error('Clipboard copy error:', error);
        });
    } else {
      // URL is too long, you may want to truncate it or handle it in some other way
      alert('URL is too long to copy to clipboard');
    }
  };

 
  const handleClick = () => {
    closeToggle(false);
  }



  return (
    <div className=' flex h-full flex-start font-patua no-scrollbar p-12 pt-28 gap-3 items-center  flex-col '>
      
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5, delay: .3 }} className='flex items-center justify-center flex-col'>
        <p className='text-3xl'>Operations Hub</p>
        <motion.img src={Line} alt="line" />
      </motion.div>

      {
        location.pathname.includes(`/user/`) && (
          <>
            <motion.div whileHover={{ scale: 1.25, transition: { delay: 0, duration: .2 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-full md:w-5/6 h-14 relative text-xl'>
              <Link onClick={handleClick} to={`/edit/${userId}`} className='flex justify-center items-center flex-row gap-4'>
                <img src={Edit} alt="edit" className='w-10 h-10' />
                Tailor Your Profile
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.25, transition: { delay: 0, duration: .2 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-full md:w-5/6 h-14 relative text-xl'>
              <Link onClick={shareUrl} className='flex flex-start items-center flex-row gap-4'>
                <motion.img src={Share} alt="Share" className='w-10 h-10 mr-2' />
                Share My Profile
              </Link>
            </motion.div>
          </>
          
        )
      }

      <motion.div whileHover={{ scale: 1.25, transition: { delay: 0, duration: .2 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-full  md:w-5/6 h-14 relative text-xl '>
        <Link onClick={handleClick} to={'/about'} className='flex flex-start items-center flex-row gap-4'>
          <motion.img animate={{ rotate: [0, 200, 200, 0] }} transition={{delay:0.7}} src={About} alt="about" className='w-10 h-10' />
          Platform Insights
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.25, transition: { delay: 0, duration: .3 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-full md:w-5/6 h-14 relative text-xl'>
        <Link to={'/contact'} onClick={handleClick} className='flex flex-start items-center flex-row gap-4'>
          <motion.img src={Contact} alt="Contact" className='w-10 h-10' />
          Request assistance
        </Link>
      </motion.div>
     
      <motion.div whileHover={{ scale: 1.25, transition: { delay: 0, duration: .2 } }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-full md:w-5/6 h-14 relative text-xl'>
        <Link onClick={() => {
          window.location.href = 'https://github.com/anshul-kh/BioLink-Universe.git';
          handleClick();  }} className='flex flex-start items-center flex-row gap-4'>
          <motion.img   src={Github} alt="gitub" className='w-10 h-10' />
          Navigate to GitHub
        </Link>
      </motion.div>

      


      <div className='md:hidden bottom-24 absolute flex w-full flex-col justify-center items-center gap-5 text-center '>
        <p>Support the Dev:</p>
        <Footer className={'flex flex-row justify-center items-center  gap-4 md:fixed relative md:text-2xl font-footer '} />

        </div>

 </div>
  )
}

export default Sidebar
