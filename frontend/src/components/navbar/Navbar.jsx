import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaHome,
  FaGamepad,
  FaBook,
  FaMusic,
  FaPaintBrush,
} from 'react-icons/fa';

const LinkNavbar = ({ to, icon: Icon, label }) => (
  <li className='hover:text-red-500 transition duration-300'>
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
  return (
    <nav className='bg-secondary-500 text-paper-100'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='#'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            Palabrerías
          </span>
        </a>
        <ul className='w-full flex items-center justify-between mt-2 space-x-8 md:w-auto md:m-0'>
          <LinkNavbar
            to='/'
            icon={FaHome}
            label='Inicio'
          />
          <LinkNavbar
            to='/randomstory'
            icon={FaGamepad}
            label='Juegos'
          />
          <LinkNavbar
            to='/randomstory'
            icon={FaBook}
            label='Libros'
          />
          <LinkNavbar
            to='/'
            icon={FaMusic}
            label='Musica'
          />
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
