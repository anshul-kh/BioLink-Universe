import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Major, Minor } from '../components';
import { fetchUser, userQuery } from '../utils/query';
import { client } from '../utils/client';
import Github from '../assets/github.png'

const Profile = () => {
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const query = userQuery(userId);
        await client.fetch(query).then((data) => {
          setUser(data[0]);
        });
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);

  const { userName, profImg } = user || {};

  const randomImg = 'https://source.unsplash.com/1600x900/?code/';

  return (
    <div className="flex flex-col justify-around  h-auto over overflow-x-scroll no-scrollbar items-center w-3/5 ">
      <div className="w-full flex flex-col justify-center items-center">
        <img
          src={randomImg}
          alt="banner"
          className="w-full relative h-72 rounded-2xl shadow-xl drop-shadow-md object-fill"
        />

        <img
          src={profImg}
          alt="userImage"
          className='rounded-full w-36 h-36 -mt-20 border-4  border-white drop-shadow-2xl relative'
        />
        <p className='font-patua text-2xl'>{userName}</p>

      </div>

      <div>

      </div>

      
      <div className='flex flex-col justify-center items-center gap-8 mt-3'>
        <Major icon={Github} title={"Follow On Github"} />
        <Major icon={Github} title={"Follow On Github"} />
        <Major icon={Github} title={"Follow On Github"} />
        
        </div>
    

      <div>
        <p>Other Links</p>
        <Minor />
      </div>
    </div>
  );
};

export default Profile;