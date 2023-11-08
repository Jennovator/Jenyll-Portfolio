import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Carousel } from "@material-tailwind/react";

const Tech = () => {
  return (
    <div id='technology' className='flex items-center mt-16'>
      <div className='container mx-auto max-w-7xl'>
        <div className='bg-tertiary rounded-2xl min-h-[500px]'>
          <motion.div
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            <p className={`${styles.sectionSubText}`}> What I use </p>
            <h2 className={`${styles.sectionHeadText}`}>Technology.</h2>
          </motion.div>

          <div>
            <Carousel className="rounded-xl">
            
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech;