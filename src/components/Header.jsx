import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';

const Header = () => {

  const [toggle, setToggle] = useState(false); // for toggle menu

  return (
    <header className='fixed w-full py-5 bg-dark'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         
        {/* <img src={logo} alt="logo" className="w-[25] h-[100px] object-contain xxs:w-[110px]" /> */}
        <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer flex"> JTM</p> 
        </Link>

        <Link to='/contact'>
          <button className='btn rounded-full text-white font-semibold h-[45px] w-[150px] opacity-[0.80] hover:opacity-[1]'>Work with me</button>
        </Link>

        </div>
      </div>
    </header>
  )
}

export default Header;