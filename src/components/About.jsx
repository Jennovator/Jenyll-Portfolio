import React, {useState, useEffect} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { technologies } from '../constants';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { useMediaQuery } from 'react-responsive';

const About = () => {
    const [slidesToShow, setSlidesToShow] = useState(5);

    // Determine if the viewport width is less than or equal to 510 pixels
    const isMobile = window.innerWidth <= 510;

    useEffect(() => {
      if (isMobile) {
        setSlidesToShow(3); // Set slidesToShow to 1 for mobile screens
      } else {
        setSlidesToShow(5); // Set slidesToShow to 3 for larger screens
      }
    }, [isMobile]);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: slidesToShow,
      slidesToScroll: 2,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 0.5,
      arrows: false
    };  

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
            <img src={icon} alt={title} className='max-w-[100px]'/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

  return (
      <div id='about' className='flex items-center mt-12 mb-20'>
        <div className='container mx-auto'>
          <div>
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

            <div className='mt-20 gap-5'>
              <Slider {...settings}>
                {technologies.map((technology, index) => (
                  <img key={index} src={technology.icon} alt={technology.name} className='max-w-[80px] h-[80px] gap-5 ml-5' />
                ))}
              </Slider>
            </div>

          </div>
        </div>
      </div>
  )
}

export default About;