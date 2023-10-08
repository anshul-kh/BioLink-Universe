import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Line,Map } from '../assets';
function ContactForm() {
     const [state, handleSubmit] = useForm("mjvqpqwb");
     if (state.succeeded) {
          return <p>Thanks for joining!</p>;
     }
     return (
          <div className='flex flex-row justify-center items-center w-full gap-7'>
               <div className='flex flex-row justify-center items-start absolute z-10 text-6xl gap-5 top-24 ml-48  text-center font-patua '><p className='text-white'>Feel Free</p>
                    <p className=''> To Request Assistance </p></div>
               <img src={Map} alt="insight" className='relative bottom-10' />
               <form onSubmit={handleSubmit} className='flex justify-center py-16 items-center bg-contain rounded-2xl  drop-shadow-xl flex-col top-16 w-2/6  gap-10 text-center relative  '>

                    <p className='flex justify-center items-center flex-col gap-3 text-3xl font-display text-center'>
                         Enter You Details
                         <img src={Line} alt="Line" />
                    </p>
                    
                    <input
                         id="email"
                         type="email"
                         name="email"
                         placeholder='Enter Your Email'
                         className='flex justify-center items-center bg-card rounded-2xl  drop-shadow-xl w-96 h-20 text-xl text-center relative'
                    />
                    <ValidationError
                         prefix="Email"
                         field="email"
                         errors={state.errors}
                    />
                    
                    <textarea
                         id="message"
                         name="message"
                         placeholder='Enter Your Message'
                         className='flex justify-center items-center bg-card rounded-2xl  drop-shadow-xl w-96 text-xl h-48 text-center relative'
                    />
                    <ValidationError
                         prefix="Message"
                         field="message"
                         errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting} className='flex justify-center items-center bg-black text-white font-roboto rounded-2xl  drop-shadow-xl w-96 h-16 text-center relative text-2xl'>
                         Submit
                    </button>
               </form>
          </div>
     );
}

export default ContactForm;