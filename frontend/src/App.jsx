import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Story from './pages/Story';

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col bg-primary-400'>
      <Navbar />
      <main className='min-h-full w-full flex flex-grow p-4'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/story/:id'
            element={<Story />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
