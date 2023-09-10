import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../utils/client'
import { userQuery } from '../utils/query';
import EditBtn from '../assets/Edit.png';
import { Minor, Major } from '../components';
import Github from '../assets/github.png';

const Edit = () => {
     const [user, setUser] = useState(null);
     const [text, setText] = useState('');
     const [isFocused, setIsFocused] = useState(false);
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
                 <div className='flex justify-start mt-6 items-start bg-card rounded-2xl drop-shadow-xl w-96 md:w-3/6 h-auto relative p-1  whitespace-pre-wrap'
                      onClick={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}>
                      {isFocused && <input className='h-full w-full' onChange={(e) => {
                           setText(e.target.value)
                      }} />}
                      {
                           !isFocused && (
                                <p className='font-patua text-2xl p-1 text-center flex flex-wrap w-full overflow-wrap'  >
                                     {text}
                                </p>
                           )
                      }
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
                 <Minor />
                 <Minor />
            </div>

       </div>
  )
}

export default Edit
