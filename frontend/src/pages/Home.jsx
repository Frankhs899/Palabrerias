import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-full w-full flex flex-col items-center justify-between'>
      <h1 className='text-secondary-500 text-4xl font-bold mb-6'>
        Palabrerías
      </h1>
      <p className='text-info-500 text-lg mb-8 text-center'>
        Bienvenido, Palabrerías es un juego inspirado en Mad Libs.
      </p>
      <div className='flex space-x-4'>
        <Link
          className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300'
          to='/randomstory'
        >
          Cuento aleatorio
        </Link>
      </div>
    </div>
  );
}

export default Home;
