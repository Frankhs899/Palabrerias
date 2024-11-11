import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// Componente reutilizable para los enlaces del footer
const SocialNetworksLink = ({ to, icon: Icon }) => (
  <a
    href={to}
    className='text-paper-100 hover:text-link-500 transition duration-300'
  >
    <Icon size={24} />
  </a>
);

const Footer = () => {
  return (
    <footer className='bg-secondary-500 p-4'>
      <div className='flex justify-center space-x-4'>
        <SocialNetworksLink
          to='https://www.facebook.com/'
          icon={FaFacebook}
        />
        <SocialNetworksLink
          to='https://www.twitter.com/'
          icon={FaTwitter}
        />
        <SocialNetworksLink
          to='https://www.instagram.com/'
          icon={FaInstagram}
        />
        <SocialNetworksLink
          to='https://www.youtube.com/'
          icon={FaYoutube}
        />
      </div>
      <div className='text-center text-paper-100 mt-4'>
        <p>
          &copy; {new Date().getFullYear()} Palabrerías. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
