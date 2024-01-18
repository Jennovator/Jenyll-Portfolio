import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo} from '../assets';

const Header = () => {

  //const navigate = useNavigate();

  const handleWorkWithMeClick = () => {
    const contactSection = document.getElementById('contact'); // Get the contact section element
    contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section smoothly
    
  };

  return (
    <header className='fixed w-full py-2 top-0 z-20 bg-dark'>
      <div className='container mx-auto max-w-7xl'>
        <div className='flex justify-between items-center'>
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         
        <img src={logo} alt="logo" className="w-[25] h-[80px] object-contain xxs:w-[110px]" />
        {/* <p className="lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer"> | JENYLL</p>  */}
        </Link>

          <button 
            className='bg-fuschia rounded-full shadow-md shadow-[#1f1b2a] text-white font-semibold h-[45px] w-[150px] opacity-[0.80] hover:bg-fuschia/80 focus:ring-2 drop-shadow-xl transform active:scale-y-75 transition-transform'
            onClick={handleWorkWithMeClick} // Call the function when the button is clicked
          >
              Work with me
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header;