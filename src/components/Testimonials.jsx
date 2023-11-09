import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full mx-auto h-[370px]"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>


  </motion.div>
)

const Testimonials = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 820px)' }); // Define a mobile screen breakpoint
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    if (isMobile) {
      setSlidesToShow(1); // Set slidesToShow to 1 for mobile screens
    } else if (isTablet) {
      setSlidesToShow(2); // Set slidesToShow to 3 for larger screens
    } else {
      setSlidesToShow(3); // Set slidesToShow to 3 for larger screens
    }
  }, [isMobile]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fadeIn
  };

  return (
    <div id='testimonials' className='flex items-center mt-20'>
      <div className='container mx-auto max-w-7xl'>
        <div>
          <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] mt-16`}>
            <motion.div
              variants={textVariant()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className={`${styles.sectionSubText}`}>What others say</p>
              <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
            </motion.div>
          </div>

          <div className={`${styles.paddingX} -mt-20 pb-14 gap-7 mb-20`}>
          <Slider {...settings} >
            {testimonials.map((testimonial, index) => (
                <FeedbackCard
                  key={testimonial.name}
                  index={index}
                  {...testimonial}
                />
            ))}
          </Slider>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;