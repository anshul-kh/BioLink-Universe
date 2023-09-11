import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../utils/client'
import { userQuery } from '../utils/query';
import { Minor, Major } from '../components';
import {Github,LinkedIn,Youtube,Insta,Blog} from '../assets/index';
import EditSocial from '../components/EditSocial';


const Edit = () => {
     const [user, setUser] = useState(null);
     const [text, setText] = useState('');
     const [github, setGithub] = useState();
     const [youtube, setYoutube] = useState();
     const [linkedIn, setLinkedIn] = useState();
     const [insta, setInsta] = useState();
     const [blog, setBlog] = useState();


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
         
                           <textarea
                                className='flex justify-start mt-6 items-start bg-card rounded-2xl drop-shadow-xl  md:w-3/6 h-auto relative p-1 text-center text-xl  whitespace-pre-wrap'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                style={{
                                     
                                     height: '150px',
                                     whiteSpace: 'pre-wrap',
                                     overflowWrap: 'break-word',
                                     overflowY: 'scroll'
                                }}
                                placeholder='Enter Your Bio Text Here. Please note it should not be more that 40 words'
                           />


            </div>

            <div>

            </div>


            <div className='flex flex-col w-full justify-center items-center gap-8 mt-7'>
                 <EditSocial icon={Github} title={'GitHub'} state={github} setState={setGithub} />
                 <EditSocial icon={LinkedIn} title={'LinkedIn'} state={linkedIn} setState={setLinkedIn} />
                 <EditSocial icon={Blog} title={'Blogs'} state={blog} setState={setBlog} />
                 <EditSocial icon={Insta} title={'Instagram'} state={insta} setState={setInsta} />
                 <EditSocial icon={Youtube} title={'Youtube'} state={youtube} setState={setYoutube} />
                 
                 
                 
                 
                 

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
