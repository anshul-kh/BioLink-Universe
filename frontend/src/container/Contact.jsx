import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Line, Map,Com } from '../assets/index';
import { motion } from 'framer-motion';

function ContactForm() {
     const [state, handleSubmit] = useForm("mjvqpqwb");
     if (state.succeeded) {
          return <p>Response Has Been Submitted!</p>;
     }
     return (
          <motion.div className='flex md:mt-0 mt-6  md:flex-row flex-col md:justify-center items-center w-screen md:w-auto
          md:h-auto h-screen gap-7'>
               <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .4 }} className='flex flex-row  justify-center md:items-start items-center md:absolute md:z-10 md:text-6xl md:gap-5 gap-2 top-28 md:ml-48  text-xl  text-center font-patua '><p className=' md:text-white'>Feel Free</p>
                    <motion.p className=''> To Request Assistance </motion.p></motion.div>
               <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .2 }} src={Map} alt="insight" className='md:flex hidden md:bottom-10  ' />
               <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .2 }} src={Com} alt="insight" className='relative md:hidden md:bottom-10  ' />
               <motion.form animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .6 }} onSubmit={handleSubmit} className='flex justify-center md:py-16 items-center bg-contain  rounded-2xl  drop-shadow-xl flex-col md:top-16  md:w-3/6  gap-10  p-5 text-center relative md:h-auto h-3/6 '>
                    <p className='flex justify-center items-center flex-col gap-3 text-3xl font-display text-center'>
                         Enter The Details
                         <img src={Line} alt="Line" />
                    </p>
                    
                    <input
                         id="email"
                         type="email"
                         name="email"
                         placeholder='Enter Your Email'
                         className='flex justify-center items-center bg-card rounded-2xl  drop-shadow-xl md:w-96 w-full h-16    md:h-20 text-xl text-center relative'
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
                         className='flex justify-center items-center bg-card rounded-2xl  drop-shadow-xl md:w-96 w-full text-xl md:h-48 h-40 text-center relative'
                    />
                    <ValidationError
                         prefix="Message"
                         field="message"
                         errors={state.errors}
                    />
                    <motion.button whileHover={{scale:1.2,transition:{duration:.3}}} type="submit" disabled={state.submitting} className='flex justify-center items-center bg-black text-white font-roboto rounded-2xl  drop-shadow-xl md:w-96 md:h-16 w-full h-14 text-center relative text-2xl'>
                         Submit
                    </motion.button>
               </motion.form>
          </motion.div>
     );
}

export default ContactForm;