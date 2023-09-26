import React,{useEffect, useState} from 'react'
import Line from '../assets/line.png'
import { Link, useLocation, useParams } from 'react-router-dom';
import { Edit, Share, About, Contact } from '../assets/sidebar';
import { Github } from '../assets';


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
    <div className='z-40 flex h-full flex-start font-patua no-scrollbar p-12 pt-28 gap-3 items-center  flex-col '>
      <p className='text-3xl'>Operations Hub</p>
      <img src={Line} alt="line" />
      {
        location.pathname.includes(`/user/`)   && (
          <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
            <Link to={`/edit/${userId}`} className='flex justify-center items-center flex-row gap-4'>
              <img src={Edit} alt="edit" className='w-10 h-10' />
              Tailor Your Profile
            </Link>
          </div>
        )
      }

      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl '>
        <Link className='flex flex-start items-center flex-row gap-4'>
          <img src={About} alt="about" className='w-10 h-10' />
          Platform Insights
        </Link>
      </div>
      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link className='flex flex-start items-center flex-row gap-4'>
          <img src={Contact} alt="Contact" className='w-10 h-10' />
          Request assistance
        </Link>
      </div>
      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link className='flex flex-start items-center flex-row gap-4'>
          <img src={Share} alt="Share" className='w-10 h-10 mr-2' />
          Share My Profile
        </Link>
      </div>
      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link className='flex flex-start items-center flex-row gap-4'>
          <img src={Github} alt="gitub" className='w-10 h-10' />
          Navigate to GitHub
        </Link>
      </div>

      


      <div className='bottom-20 absolute flex w-full flex-col justify-center items-center gap-1 '>
        <p className='text-xl'>Follow For More :-</p>
        <img src={Line} alt="line" />
        

        </div>

 </div>
  )
}

export default Sidebar
