import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Line, Map } from '../assets';
import { motion } from 'framer-motion';

function ContactForm() {
     const [state, handleSubmit] = useForm("mjvqpqwb");
     if (state.succeeded) {
          return <p>Response Has Been Submitted!</p>;
     }
     return (
          <motion.div  className='flex flex-row justify-center items-center w-full gap-7'>
               <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .4 }} className='flex flex-row justify-center items-start absolute z-10 text-6xl gap-5 top-24 ml-48  text-center font-patua '><p className='text-white'>Feel Free</p>
                    <motion.p className=''> To Request Assistance </motion.p></motion.div>
               <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .2 }} src={Map} alt="insight" className='relative bottom-10' />
               <motion.form animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .6 }} onSubmit={handleSubmit} className='flex justify-center py-16 items-center bg-contain rounded-2xl  drop-shadow-xl flex-col top-16 w-2/6  gap-10 text-center relative  '>

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
                    <motion.button whileHover={{scale:1.2,transition:{duration:.3}}} type="submit" disabled={state.submitting} className='flex justify-center items-center bg-black text-white font-roboto rounded-2xl  drop-shadow-xl w-96 h-16 text-center relative text-2xl'>
                         Submit
                    </motion.button>
               </motion.form>
          </motion.div>
     );
}

export default ContactForm;