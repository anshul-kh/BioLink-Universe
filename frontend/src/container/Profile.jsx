import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Major, Minor } from '../components';
import { userQuery, dataQuery } from '../utils/query';
import { client } from '../utils/client';

import Github from '../assets/github.png';
import { Blog, Insta, LinkedIn, Youtube } from '../assets';

import Lottie from 'react-lottie-player'
import lottieJson from '../assets/Loader/loader.json'

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [bioData,setBioData] = useState(null);

  const { userId } = useParams();


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

  const { userName, image } = user || {};

  const randomImg = 'https://source.unsplash.com/1600x900/?night,aesthetic,photography,technologgy/'
  
  return (
    <div className="flex flex-col justify-start h-auto min-h-full overflow-y-scroll no-scrollbar items-center gap-1 w-3/5 ">
      {loading ? (<Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 150, height: 150 }}
      />): (<>
      <div className="w-full mt-14 flex flex-col justify-center items-center">
        <div className='flex justify-center flex-col items-center bg-card md:w-3/6 rounded-2xl drop-shadow-xl w-96 h-48  relative overflow-hidden'>
          <img src={randomImg} alt="banner" />
          </div>
        <div className='flex -mt-16 items-center justify-center flex-col '>
          <img
            src={image}
            alt="userImage"
            className='rounded-full w-36 h-36 -mt-10 border-2 bg-white-400 drop-shadow-2xl relative'
          />
          <p className='font-patua text-2xl'>{userName}</p>
      </div>
        
        <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-3/6 h-auto relative'>
          <p className='text-center p-3 font-footer text-xl'> 
           {bioData?.intro}
         </p>
        </div>

      </div >

      <div>

      </div>


      <div className='flex flex-col w-full justify-center items-center gap-8 mt-5'>
        {bioData?.github && bioData?.github !== "" && <Major icon={Github} title={"Follow On Github"} link={bioData?.github} />}
        {bioData?.linkedIn && bioData?.linkedIn !== "" && <Major icon={LinkedIn} title={"Follow On LinkedIn"} link={bioData?.linkedIn} />}
        {bioData?.blogs && bioData?.blogs !== "" && <Major icon={Blog} title={"Follow The Blogs"} link={bioData?.blogs} />}
        {bioData?.instagram && bioData?.instagram !== "" && <Major icon={Insta} title={"Follow On Insta"} link={bioData?.instagram} />}
        {bioData?.youtube && bioData?.youtube !== "" && <Major icon={Youtube} title={"Follow On YouTube"} link={bioData?.youtube} />}
        
        


      </div>


{
  bioData?.other1 && (
    <div className='text-center flex  w-full flex-col justify-center items-center font-patua mt-5 gap-3 mb-5'>
      <p className='text-2xl'>Other Links</p>
      {bioData?.other1 && bioData?.other1.input !== "" && <Minor link={bioData?.other1?.input} title={bioData?.other1?.title} />}
      {bioData?.other2 && bioData?.other2.input !== "" && <Minor link={bioData?.other2?.input} title={bioData?.other2?.title} />}
      {bioData?.other3 && bioData?.other3.input !== "" && <Minor link={bioData?.other3?.input} title={bioData?.other3?.title} />}
      {bioData?.other4 && bioData?.other4.input !== "" && <Minor link={bioData?.other4?.input} title={bioData?.other4?.title} />}

    </div>
  )
} </>)
}

    </div>
  );
};

export default Profile;