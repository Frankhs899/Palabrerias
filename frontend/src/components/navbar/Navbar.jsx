import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaHome, FaRandom } from 'react-icons/fa';
import { Context } from '../../context/GlobalState';
import PalabreriasLogo from '../logo/PalabreriasLogo';

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
  const { handleRandomStory } = useContext(Context);

  return (
    <nav className='bg-secondary-500 text-paper-100'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse hover:text-link-500 transition duration-300'
        >
          <PalabreriasLogo />
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
