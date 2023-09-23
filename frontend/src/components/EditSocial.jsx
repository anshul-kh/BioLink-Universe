import React from 'react';

const EditSocial = (props) => {
     console.log();
     return (

          <div className='flex  justify-center items-center bg-card md:w-3/6 rounded-2xl drop-shadow-xl w-96 h-20 relative'>
               <div className='flex flex-row flex-start w-32 right-7 relative items-center bottom-7 gap-1'>
                    <img src={props.icon} alt='icon' key={props.title} className=' bottom-6 w-16 h-16' />
                    <p className=' text-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]  font-patua  z-20 bottom-4'>{props.title}</p>
               </div>
               <input type="text" className='w-3/6 text-center right-14 text-xl font-footer h-full outline-none bg-inherit relative' placeholder='Enter Your Link Here' onChange={(e) => {
                    props.setState(e.target.value)
               }} />
               

          </div>
     )
}

export default EditSocial
