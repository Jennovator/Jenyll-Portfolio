import React, {useState} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { github, link } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <motion.div
      variants={fadeIn("down", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className='flex flex-col xxl:mx-auto '
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="group relative w-full h-[230px]">

          <div className='group-hover:bg-dark/90 w-full h-full rounded-2xl absolute z-40 transition-all duration-300'></div>

          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl "
          />

          <div className='opacity-0 absolute -bottom-8 mx-auto group-hover:opacity-100 group-hover:bottom-5 transition-all duration-500 z-50'>

            <p className="mt-2 text-white text-[14px]">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={tag.name}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>


          </div>


        </div>

        <div className="mt-5 flex flex-row justify-between">
          <h3 className="text-white font-bold text-[20px]">{name}</h3> 
          <div className='flex flex-row gap-3'>
          <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />

            </div>

            <div
              onClick={() => window.open(website_link, "_blank")}
              className='violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='Website'
                className='w-1/2 h-1/2 object-contain'
              />

            </div>
          </div>
        </div>


      </Tilt>
    </motion.div>
  )
}

const Projects = () => {

  const [activeTab, setActiveTab] = useState('all');

  const filterProjects = (category) => {
    if (category === 'all') {
      return projects;
    } else {
      return projects.filter(project => project.category.includes(category));
    }
  };

  const filteredProjects = filterProjects(activeTab);

  const tabs = ['all', 'front-end', 'with-backend', 'UI/UX'];

  return (
    <div id='project' className='flex items-center'>
      <div className='container mx-auto max-w-7xl'>
        <div className='mt-8'>
          <motion.div
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            <p className={`${styles.sectionSubText}`}> My work </p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Welcome to my projects portfolio, where creativity meets functionality.
              Here, I showcase a collection of my endeavors that reflect my passion for innovation and problem-solving. For
              each project is a testament to my skills, dedication, and love for bringing ideas to life.
              Explore these pages to discover the diverse range of projects I have undertaken,
              each one a unique journey in the world of design, technology, and creativity.
            </motion.p>
          </div>

          <div className="mt-10 flex flex-wrap gap-7 items-center justify-between">
            <div className="flex gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-sm px-3 py-2 rounded-full cursor-pointer ${
                    activeTab === tab ? 'bg-primary text-white' : 'bg-light-gray'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={`grid grid-cols-3 gap-16 mb-8`}>
             {filteredProjects.map((project, index) => (
              
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;