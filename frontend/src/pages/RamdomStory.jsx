import { useState, useEffect } from 'react';
import stories from '../stories.json';

function RamdomStory() {
  const [answers, setAnswers] = useState({});
  const [filledHistory, setFilledHistory] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const dataLength = stories.length;
    console.log(`La cantidad de historias es: ${dataLength}`);
    const randomIndex = Math.floor(Math.random() * dataLength);
    console.log(`Índice aleatorio: ${randomIndex}`);
    const story = stories[randomIndex];
    if (story) {
      setSelectedStory(story);
    } else {
      console.error('No se pudo encontrar una historia válida.');
    }
  }, []);

  if (!selectedStory) {
    return <div>Cargando historia...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const getFilledHistory = () => {
    if (!selectedStory.history) return '';
    return selectedStory.history.replace(
      /{(\d+)}/g,
      (_, key) => answers[key] || `{${key}}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completedHistory = getFilledHistory();
    setFilledHistory(completedHistory);
    setIsSubmitted(true); // Ocultar el formulario
    console.log('Historia completa:', completedHistory);
  };

  return (
    <div className='w-full'>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className='max-w-sm mx-auto'
        >
          {selectedStory.questions &&
            Object.entries(selectedStory.questions).map(([key, question]) => (
              <div
                key={key}
                className='flex flex-col mb-5'
              >
                <label
                  htmlFor={key}
                  className='font-semibold'
                >
                  {question}
                </label>
                <input
                  type='text'
                  id={key}
                  name={key}
                  value={answers[key] || ''}
                  onChange={handleInputChange}
                  className='border rounded px-2 py-1'
                  placeholder={`Escribe ${question.toLowerCase()}`}
                  required
                />
              </div>
            ))}
          <button
            type='submit'
            className='bg-link-500 text-white px-4 py-2 rounded w-full'
          >
            Enviar respuestas
          </button>
        </form>
      ) : (
        <div className='mt-6 p-4 bg-gray-100 rounded'>
          <h2 className='text-xl font-bold mb-2'>{selectedStory.title}</h2>
          <p>{filledHistory}</p>
        </div>
      )}
    </div>
  );
}

export default RamdomStory;
