import React from 'react'
import { motion } from 'framer-motion'

const Freebar = () => {
     return (
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3, delay: .5 }} className='invisible md:visible flex flex-row items-center transform-gpu -rotate-90  gap-3 fixed  top-1/2  -translate-y-1/2 font-footer text-2xl font-semibold  center -left-2 z-20'>

               <p className='text-lightGray'>Free</p>
               <p className='text-black'>For All</p>

          </motion.div>
     )
}

export default Freebar
