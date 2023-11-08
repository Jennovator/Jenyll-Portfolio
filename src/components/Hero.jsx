import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideIn, fadeIn } from '../utils/motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { styles } from '../styles';
import { jen } from '../assets';

const Hero = () => {
  const words = ["Designer", "Developer", "Gamer"];
  const [name, setName] = useState(0); // Initial content of the span element

  // useEffect to change the name every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index, wrapping around to 0 when reaching the end of the array
      const nextIndex = (name + 1) % words.length;
      setName(nextIndex); // Update the state with the next index
    }, 1500); // 2000 milliseconds = 5 seconds

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [name]); // // Re-run the effect whenever the name changes

  // Determine if the viewport width is less than or equal to 510 pixels
  const isMobile = window.innerWidth <= 510;

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto max-w-7xl">
        <div className='mt-24 flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-x-7'>
          <motion.div 
            className='hidden lg:flex flex-col items-center justify-center mx-auto'
            variants={fadeIn('right', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </motion.div>
          {/* text */}
          <motion.div
            className='flex-1 text-center lg:text-left mx-auto'
            variants={fadeIn('right', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h1 className={`text-secondary text-[20px] lg:mt-12 lg:${styles.heroSubText} font-semibold`}>
              JENYLL <span>MABBORANG</span>
            </h1>
            <div className={`flex-nowrap ${styles.heroHeadText}`}>
              I am a {isMobile && <br />}
              <span className={`text-[#915eff] flex-1 uppercase`} >
                {words[name]}
              </span>
            </div>
            <p className={`mt-2 text-secondary lg:text-[20px]`}>
              I develop 3D visuals, user <br /> interfaces and web applications
            </p>

            <div className="mt-12 mb-10 cursor-pointer">
              <a href="/src/assets/RESUME-MABBORANG.pdf"
                download={true}
                className="bg-fuschia py-2.5 px-6 outline-none text-white font-bold drop-shadow-2xl rounded-xl hover:bg-secondary xxs:cursor-pointer"
              >
                Resume
              </a>
            </div>

            {/* socials */}
            <div className='flex gap-x-5 mx-auto max-w-max text-2xl lg:mx-0 '>
              <a href='https://github.com/Jennovator'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/jenyll-mabborang-297776289/'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/jnyll.mab/'>
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* image */}
          <motion.div
            className='hidden lg:flex mx-auto max-w-[320px] lg:max-w-[700px]'
            variants={fadeIn('left', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={jen} alt='Jenyll Mabborang' className='w-[430px] h-[400px] mx-auto hero-image' />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero;