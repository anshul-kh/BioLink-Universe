import React from 'react'
import Line from '../assets/line.png'
import Bio from '../assets/Login1.png'
import Google from '../assets/Google.png'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const Login = () => {
  
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: response => {
      const userInfo = jwt_decode(response.access_token);
      // get user details
      const { name, email, picture } = userInfo;
      console.log(name,email,picture)
    },
  });

  return (
    <div className='absolute flex items-center justify-center flex-col   h-auto gap-12 w-8/12'>
      <div className='flex flex-col justify-center items-center font-roboto text-xl'>
        <p> Your Journey Begins</p>
        <img src={Line} alt="line" />

      </div>


      <div className='flex flex-col font-patua gap-3 text-5xl'>
        
          <p>
            Hassle-free setup with

          </p>
          <p>Google Authentication</p>
        
      </div>

      <div className='flex justify-between w-4/6 bg-contain rounded-xl drop-shadow-xl font-patua '>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-5xl gap-2 flex flex-col drop-shadow-2xl relative bottom-12'><p>Step into</p>
            <p>Bio Oasis</p></div>

          <button className='flex relative flex-shrink-0 justify-center items-center flex-col -left-6 cursor-pointer top-7' onClick={() => login()}>
            <img src={Google} className='absolute -top-12 z-30' alt="google" />
            <div className='w-80 h-16 flex justify-center items-center drop-shadow-lg rounded-xl bg-card text-2xl flex-shrink-0'>
              Authenticate
            </div>
          </button>

 

    </div>
        <img src={Bio} className='bottom-3 drop-shadow-xl relative right-1' alt="bio" />
      </div>
    </div>
  )
}

export default Login
