import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaHome, FaRandom } from 'react-icons/fa';

import stories from '../../stories.json';

const LinkNavbar = ({ to, icon: Icon, label }) => (
  <li className='hover:text-link-500 transition duration-300'>
    <Link
      to={to}
      className='flex flex-col items-center'
    >
      <Icon size={24} />
      <span className='text-xs'>{label}</span>
    </Link>
  </li>
);

function Navbar() {
  const navigate = useNavigate();

  const handleRandomStory = () => {
    const randomIndex = Math.floor(Math.random() * stories.length);
    const randomStory = stories[randomIndex];
    navigate(`/story/${randomStory.id}`);
  };

  return (
    <nav className='bg-secondary-500 text-paper-100'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse hover:text-link-500 transition duration-300'
        >
          {/* <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8'
            alt='Flowbite Logo'
          /> */}
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            Palabrerías
          </span>
        </Link>
        <ul className='w-full flex items-center justify-between mt-2 space-x-8 md:w-auto md:m-0'>
          <LinkNavbar
            to='/'
            icon={FaHome}
            label='Inicio'
          />

          <li className='hover:text-link-500 transition duration-300'>
            <button
              className='flex flex-col items-center'
              onClick={handleRandomStory}
            >
              <FaRandom size={24} />
              <span className='text-xs'>Aleatorio</span>
            </button>
          </li>

          <LinkNavbar
            to='https://github.com/Frankhs899/Palabrerias'
            icon={FaGithub}
            label='Código'
          />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
