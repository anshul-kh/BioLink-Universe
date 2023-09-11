import React,{useEffect, useState} from 'react'
import Line from '../assets/line.png'
import { Link, useLocation, useParams } from 'react-router-dom';


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

  // console.log(typeof (user));



  return (
    <div className='z-40 flex h-full flex-start font-patua pt-24 gap-3 items-center p-7 flex-col '>
      <p className='text-2xl'>Welcome</p>
      <img src={Line} alt="line" />
      {
        location.pathname.includes(`/user/`)   && (
          <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
            <Link to={`/edit/${userId}`}>
              Edit Your Profile
            </Link>
          </div>
        )
      }

      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl '>
        <Link>
        About
        </Link>
      </div>
      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link>
        Contact
        </Link>
      </div>
      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link>
        Share
        </Link>
      </div>
      <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-5/6 h-14 relative text-xl'>
        <Link>
        Feedback
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
