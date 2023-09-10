import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Major, Minor } from '../components';
import { userQuery } from '../utils/query';
import { client } from '../utils/client';
import EditBtn from '../assets/Edit.png';
import Github from '../assets/github.png';

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


  return (
    <div className="flex flex-col justify-start h-auto min-h-full overflow-y-scroll no-scrollbar items-center gap-1 w-3/5 ">
      <div className="w-full mt-28 flex flex-col justify-center items-center">
      
        <img
          src={profImg}
          alt="userImage"
          className='rounded-full w-36 h-36 -mt-10 border-4  border-white drop-shadow-2xl relative'
        />
        <p className='font-patua text-2xl'>{userName}</p>
        <div className='flex justify-center mt-6 items-center bg-card rounded-2xl drop-shadow-xl w-96 md:w-3/6 h-auto relative'>
          <p className='text-center p-3 font-footer text-xl'> 
            Meow there! 🐾 I'm not just any ordinary kitten, I'm Kitty – the extraordinary talking feline friend!
         </p>
        </div>

      </div>

      <div>

      </div>


      <div className='flex flex-col w-full justify-center items-center gap-8 mt-7'>
        <Major icon={Github} title={"Follow On Github"} />
        <Major icon={Github} title={"Follow On Github"} />
        <Major icon={Github} title={"Follow On Github"} />

      </div>


      <div className='text-center flex  w-full flex-col justify-center items-center font-patua mt-5 gap-3 mb-5'>
        <p className='text-2xl'>Other Links</p>
        <Minor/>
        <Minor/>
      </div>

    </div>
  );
};

export default Profile;