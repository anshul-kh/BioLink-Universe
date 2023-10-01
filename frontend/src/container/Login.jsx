import React, { useEffect } from 'react'
import Line from '../assets/line.png'
import Bio from '../assets/Login1.png'
import Google from '../assets/Google.png'
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { client_id } from '../utils/id'
import { gapi } from "gapi-script";
import { client } from '../utils/client';
import { v4 as uuidv4 } from 'uuid';
import Lottie from 'react-lottie-player'
import lottieJson from '../assets/Loader/loader.json'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Login = () => {

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = (res) => {
    setLoading(true);

    localStorage.setItem('user', JSON.stringify(res.profileObj));
    

    const { name, email, imageUrl, googleId } = res.profileObj;


      const doc = {
        _id: googleId,
        _type: 'user',
        email: email,
        userName: name,
        image: imageUrl,
        bioId: uuidv4()
      }

      client.createIfNotExists(doc).then(() => {
        navigate(`/user/${googleId}`, { replace: true })
      })
     setLoading(false);
    }

    
  

  useEffect(() => {
    setLoading(true);
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: {client_id}
      });
    });
    setLoading(false);
  }, [])

  
  


  return (
    <div className='absolute flex items-center justify-center flex-col h-auto gap-12 w-8/12'>
      {loading ? (
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 150, height: 150 }}
        />
      ): (<>
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .2 }} className='flex flex-col justify-center items-center font-roboto text-xl'>
        <p> Your Journey Begins</p>
        <img src={Line} alt="line" />

      </motion.div >


      <motion.div className='flex flex-col font-patua gap-3 text-5xl'>

            <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .3 }}>
          Hassle-free setup with

        </motion.p>
            <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .4 }}>Google Authentication</motion.p>

      </motion.div>

          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .5 }} className='flex justify-between w-4/6 bg-contain rounded-xl drop-shadow-xl font-patua '>
        <motion.div className='flex flex-col justify-center items-center'>
              <motion.div  className='text-5xl gap-2 flex flex-col drop-shadow-2xl relative bottom-12 left-10'><motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .6 }}>Step into</motion.p>
                <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .6 }}>Bio Oasis</motion.p></motion.div>



          <GoogleLogin
            render={(renderProps) => (
                  <motion.button whileHover={{x:70,y:5,scale:1.1,transition:{duration:1}}} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .7 }} className='flex relative flex-shrink-0 justify-center items-center flex-col -left-6 cursor-pointer top-7' onClick={renderProps.onClick} >
                <img src={Google} className='absolute -top-12 z-30' alt="google" />
                <div className='w-80 h-16 flex justify-center items-center drop-shadow-lg rounded-xl bg-card text-2xl flex-shrink-0'>
                  Authenticate
                </div>
              </motion.button>
            )}
            clientId={client_id}
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleLogin}
            cookiePolicy="single_host_origin"
          />


        </motion.div>
            <motion.img whileHover={{x:15,y:20,scale:1.05,transition:{duration:1}}} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .8 }} src={Bio} className='bottom-3 drop-shadow-xl relative right-1' alt="bio" />
          </motion.div></>)
        
        
      }
      <Footer/>
    </div>
  )
}

export default Login
