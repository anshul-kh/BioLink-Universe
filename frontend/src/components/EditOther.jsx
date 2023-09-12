import React from 'react'

const EditOther = (props) => {
  return (
       <div className='flex  justify-center text-center items-center bg-card md:w-3/6 rounded-2xl drop-shadow-xl w-96 h-20 relative'>
            <div className='flex flex-row flex-start w-32 right-7 relative items-center bottom-7 gap-1'>
                 <input className=' text-2xl outline-none bg-transparent  font-patua  z-20 bottom-4' placeholder='Your Title' onChange={(e) => {
                      props.setInp(e.target.value)
                 }}/>
            </div>
            <input type="text" className='w-3/6 right-6 text-xl font-footer h-full outline-none bg-inherit relative' placeholder='Enter Your Link Here' onChange={(e) => {
                 props.setLink(e.target.value)
            }} />


       </div>
  )
}

export default EditOther
