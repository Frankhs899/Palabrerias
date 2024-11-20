import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/GlobalState';

function Home() {
  const { handleRandomStory, stories } = useContext(Context);

  return (
    <div className='min-h-full w-full flex flex-col items-center'>
      <header className='text-center  w-full py-12'>
        <h1 className='text-secondary-500 text-5xl font-extrabold mb-4'>
          Palabrerías
        </h1>
        <p className='text-info-500 text-xl max-w-3xl mx-auto'>
          ¡Bienvenido a Palabrerías! ¿Estás listo para una dosis de diversión
          con las palabras? Este juego te invita a crear historias absurdas y
          originales a partir de una serie de palabras aleatorias. ¡Pon a prueba
          tu creatividad y sorprende a tus amigos con tus frases más locas!
        </p>
      </header>
      <div className='flex-grow w-full px-6 py-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <button
            onClick={handleRandomStory}
            className='bg-gradient-to-r from-secondary-400 to-secondary-600 text-white text-lg font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105'
          >
            Cuento aleatorio
          </button>
          {stories.map((story) => (
            <Link
              key={story.id}
              to={`/story/${story.id}`}
              className='bg-white text-info-400 text-lg font-medium py-3 px-5 rounded-lg shadow-md hover:shadow-lg hover:bg-info-50 hover:text-info-600 transition-transform transform hover:scale-105 text-center'
            >
              {story.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
