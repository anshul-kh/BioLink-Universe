import React from 'react'
import { motion } from 'framer-motion'
import { Line, Insight,MidInsight } from '../assets/index'
import Footer from '../components/Footer'

const About = () => {

  return (
    <motion.div className='w-full mt-14 flex flex-col md:justify-center justify-start md:h-auto h-screen items-center'>

      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .2 }} className='hidden md:absolute top-28 left-48'>
        <img src={Line} alt="line" />
      </motion.div>

      <div className='flex md:flex-row  flex-col gap-10 justify-center items-center'>

        <motion.div className='md:flex hidden ' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .4 }} >
          <img src={Insight} alt="Insight" />
        </motion.div>

        <motion.div className='md:hidden flex' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .4 }} >
          <img src={MidInsight} alt="Insight" />
        </motion.div>

        <div className='flex flex-col relative md:bottom-28 gap-4 w-1/3 justify-center items-center'>
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .6 }} className='flex flex-row  justify-center md:top-7 items-center md:text-8xl text-2xl font-patua md:gap-7 gap-3 flex-nowrap relative z-10 md:right-20 '>
            <p className='md:text-white'>Our</p>
            <p>Paltform </p>
            <p>Insight</p>
          </motion.div>
          <div className='relative md:top-20 md:w-auto w-screen flex flex-col justify-center items-center'>
            <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .7 }} className='text-center md:w-92 w-3/4 md:text-2xl text-sm  drop-shadow-md font-roboto '>
              BioFuse is an innovative web application designed to simplify personal branding. Users can effortlessly create a professional bio link profile page, showcasing their social media links such as GitHub and Hashnode, along with a personalized 'about me' section. BioFuse empowers individuals to curate a compelling online presence in a single, user-friendly platform.
            </motion.p>
            <div className='flex items-center justify-center relative top-20 '>
              <Footer className={'md:flex hidden flex-row justify-center items-center scale-110 gap-4 fixed   md:text-2xl font-footer '} />
            </div >

          </div>
        </div>
      </div>
       
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .8 }} className='md:absolute bottom-20 right-40 hidden'>
        <img src={Line} alt="line" />
      </motion.div>
    </motion.div>
  )
}

export default About
