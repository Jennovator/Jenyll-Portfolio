// Data to be displayed
// import icons
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsTelephone, BsBriefcase, BsQuote } from 'react-icons/bs';
import { web, backend, designer, fabrik, littleLemon, lifeCheck, javascript, html, css, reactjs, threejs, tailwind, nodejs, mongodb, git, figma,} from '../assets';
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
      icon: BiHomeAlt
    },
    {
      id: "about",
      title: "About",
      icon: BiUser
    },
    {
      id: "project",
      title: "project",
      icon: BsBriefcase
    },
    {
      id: "testimonials",
      title: "Testimonials",
      icon: BsQuote
    },
    {
      id: "contact",
      title: "Contact",
      icon: BsTelephone
    },
  ];
  
  export const socialMedia = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/jenyll.mabborang"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/jnyll.mab/"
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/jenyll-mabborang-297776289/"
    },
    {
        name: "Github",
        icon: FaGithub,
        url: "https://github.com/Jennovator"
    }
  ];

  export const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: designer,
    }
  ];

  export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];

  export const projects = [
    {
      name: "Frabik",
      description:
        "FabrikThreeJS is a web application that allows users to create custom t-shirt designs effortlessly. Users can either upload their own logo and texture or ask AI to generate a unique logo and texture for them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "orange-text-gradient",
        },
        {
          name: "NodeJS",
          color: "violet-gradient",
        },
      ],
      image: fabrik,
      source_code_link: "https://github.com/Jennovator/Fabrik",
      website_link: "https://fabrikthreejs.com/"
    },
    {
      name: "Little Lemon",
      description:
        "Web application that enables users to order online and book a table and view different delicacies offered by Little Lemon, a charming family-owned Mediterranean restaurant .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: littleLemon,
      source_code_link: "https://github.com/Jennovator/Little-Lemon-Capstone",
      website_link: "https://little-lemon-jtm.vercel.app/"
    },
    {
      name: "Life Check",
      description:
        "A comprehensive health monitoring website for patients and nurses. It allows nurses to monitor their patient health and send tips/motivation to the user and view emergency list. While user can view and send health updates to nurses and play game.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "graphql",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "orange-text-gradient",
        },
        {
          name: "tensorflow",
          color: "violet-gradient",
        },
        
      ],
      image: lifeCheck,
      source_code_link: "https://github.com/Jennovator/Group4COMP308Project",
      website_link: "https://github.com/Jennovator/Group4COMP308Project"
    },
  ];

  export const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Jenyll proved me wrong.",
      name: "Apple Duquinal",
      designation: "Lorem Ipsum",
      company: "ABC",
      image: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/347418463_6888190947867422_4670961577209626614_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rWoVK4B6Ec4AX8CdsgK&_nc_ht=scontent.fyzd1-2.fna&oh=00_AfD_msyz84CAzgt36a8iuv9YLn8TuZ4VnGg2ZXzQnkjSWg&oe=654D9D86",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about the project's success like Jenyll does.",
      name: "Angel Ayra Carino",
      designation: "Data Entry Specialist",
      company: "Xerox",
      image: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/354063241_6997646683582845_5043900879073561636_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DR4sAjEITukAX-EjSxI&_nc_ht=scontent.fyzd1-2.fna&oh=00_AfCJqrhBecy8TkTpeDN8bdANHm3nPAWZMAegE0WPXKYLMQ&oe=654E8D66",
    },
    {
      testimonial:
        "Jenyll is passionate and eager to meet the projects goal.",
      name: "Jane Solema",
      designation: "Student",
      company: "Centennial College",
      image: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/313412350_5948050571920874_783007924822732310_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8Lx6hohRdN0AX8kFiUy&_nc_ht=scontent.fyzd1-2.fna&oh=00_AfBm2aZx6idTa5Tp0_lP4jT_JKObXH_uApbIMBSgFmj3-w&oe=654DF534",
    },
    {
      testimonial:
        "Jenyll is very approachable and will always lend a hand when needed.",
      name: "Romel Cagurangan",
      designation: "Laboratory Technician",
      company: "Cagayan Valley Medical Center",
      image: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t31.18172-8/27747631_2024572054479920_5762828932207791111_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=4a8XP9wNfDYAX8MWnUp&_nc_ht=scontent.fyzd1-3.fna&oh=00_AfBRFK0J283gCtvIVtLRgAujcT9-t63V_4ozKW8w83zG-Q&oe=65738847",
    },
  ];