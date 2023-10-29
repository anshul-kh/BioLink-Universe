import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Major, Minor } from '../components';
import { userQuery, dataQuery } from '../utils/query';
import { client } from '../utils/client';

import Github from '../assets/github.png';
import { Blog, Insta, LinkedIn, Youtube } from '../assets';

import Lottie from 'react-lottie-player'
import lottieJson from '../assets/Loader/loader.json'

import { motion } from 'framer-motion';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [bioData,setBioData] = useState(null);

  const { userId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const query = userQuery(userId);
        await client.fetch(query).then((data) => {
          setUser(data[0]);
          const query2 = dataQuery(data[0]?.bioId);
          client.fetch(query2).then((bio) => {
            setBioData(bio[0]);
            
          })
        });

        

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  const { userName, image, googleId } = user || {};
  if (bioData?.length === 0) {
    navigate(`/user/${googleId}`, { replace: true })
  }

  const bigRandomImage = 'https://source.unsplash.com/1600x900/?night,aesthetic,photography,technologgy/';

  const randomImg = 'https://source.unsplash.com/1600x1024/?night,aesthetic,photography,technologgy/';
  
  return (
    <div className="flex flex-col justify-start md:h-auto h-screen overflow-y-scroll no-scrollbar items-center gap-1 md:w-3/5 w-screen">
      {loading ? (<Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 150, height: 150 }}
      />): (<>
      <div className="w-full  mt-14 flex h-auto flex-col justify-start items-center">

            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .2 }} className='rounded-2xl drop-shadow-xl bg-card md:w-3/6 md:h-48  h-40 overflow-hidden w-3/4 relative'>
              <img src={bigRandomImage} alt="banner" className=' object-fill md:flex hidden ' />
              <img src={randomImg} alt="banner" className=' object-fill md:hidden ' />
            </motion.div>
            
            <motion.div  animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .3 }} className='flex md:-mt-16 -mt-8 items-center justify-center flex-col '>
              <motion.img
                whileHover={{ scale: 1.1, transition: { duration: .5 }, }}
            src={image}
            alt="userImage"
            className='rounded-full md:w-36 md:h-36 w-28 h-28 -mt-10 border-2 bg-white-400 drop-shadow-2xl relative'
          />
          <p className='font-patua text-2xl'>{userName}</p>
      </motion.div>
        
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .4 }} className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-3/4 md:w-3/6 h-auto relative'>
          <p className='text-center p-3 font-footer  md:text-xl'> 
           {bioData?.intro}
         </p>
        </motion.div>

      </div >


          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .5 }} className='flex flex-col w-full justify-center items-center gap-8 mt-4 md:mt-5'>

            {bioData?.github && bioData?.github !== "" && <Major icon={Github} title={"Follow On Github"} link={bioData?.github} />}
            
            {bioData?.linkedIn && bioData?.linkedIn !== "" && <Major icon={LinkedIn} title={"Follow On LinkedIn"} link={bioData?.linkedIn} />}
            
            {bioData?.blogs && bioData?.blogs !== "" && <Major icon={Blog} title={"Follow The Blogs"} link={bioData?.blogs} />}
            
            {bioData?.instagram && bioData?.instagram !== "" && <Major icon={Insta} title={"Follow On Insta"} link={bioData?.instagram} />}
            
            {bioData?.youtube && bioData?.youtube !== "" && <Major icon={Youtube} title={"Follow On YouTube"} link={bioData?.youtube} />}
            
        
        


      </motion.div>


{
            bioData?.other1 && bioData?.other1.input && (
              <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .7 }}  className='text-center flex  w-full flex-col justify-center items-center font-patua mt-5 gap-3 mb-5'>
      <p className='text-2xl'>Other Links</p>
      {bioData?.other1 && bioData?.other1.input && bioData?.other1.input !== '' && <Minor link={bioData?.other1?.input} title={bioData?.other1?.title} />}
                {bioData?.other2 && bioData?.other2.input && bioData?.other2.input !== '' && <Minor link={bioData?.other2?.input} title={bioData?.other2?.title} />}
                {bioData?.other3 && bioData?.other3.input && bioData?.other3.input !== '' && <Minor link={bioData?.other3?.input} title={bioData?.other3?.title} />}
                {bioData?.other4 && bioData?.other4.input && bioData?.other4.input !== '' && <Minor link={bioData?.other4?.input} title={bioData?.other4?.title} />}

    </motion.div>
  )
} </>)
}

    </div>
  );
};

export default Profile;