import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

  return (
    <>
      <div id='about' className='flex items-center mt-12'>
        <div className='container mx-auto max-w-7xl'>
          <div className='mt-0'>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              <p className={`${styles.sectionSubText}`}> Introduction </p>
              <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
            </motion.div>

            <motion.p
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Hey there! I'm a passionate web developer with expertise in JavaScript and top frameworks like React, Three.js, Node.js, and Framer Motion.
              I thrive on challenges, love learning, and enjoy crafting interactive and visually stunning web experiences.
              I'm easy-going, always eager to collaborate, and dedicated to pushing the boundaries of what's possible in the digital realm.
            </motion.p>

            <motion.div 
              variants={fadeIn('down', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="mt-12 flex flex-wrap gap-10">
              {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;