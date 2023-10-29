import React from 'react'

const EditOther = (props) => {
  return (
       <div className='flex  justify-center text-center items-center bg-card md:w-3/6 rounded-2xl drop-shadow-xl w-3/4 h-20 relative'>
            
            <div className='flex flex-row flex-start w-32 md:backdrop:right-7 relative items-center bottom-7 gap-1'>
                 <input  value={props.link} className='text-xl md:text-2xl outline-none bg-transparent  font-patua  z-20 bottom-4' placeholder='Your Title' onChange={(e) => {
                      props.setLink(e.target.value)
                 }}/>
            </div>

            <input key={'a'} value={props.inp} type="text" className='w-3/6 md:right-6 right-10 md:text-xl text-sm font-footer h-full outline-none bg-inherit relative' placeholder='Enter Your Link Here' onChange={(e) => {
                 props.setInp(e.target.value)
            }} />


       </div>
  )
}

export default EditOther
