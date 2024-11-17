import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stories from '../stories.json';

function Story() {
  const { id } = useParams();
  const [answers, setAnswers] = useState({});
  const [filledHistory, setFilledHistory] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const story = stories.find((s) => s.id === id);
    setSelectedStory(story);
  }, [id]);

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
    <div className='w-full min-h-full py-10 px-4'>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className='w-full bg-white p-6 rounded-lg shadow-lg space-y-4'
        >
          <h1 className='text-2xl font-bold text-center text-paper-800 mb-4'>
            {selectedStory.title}
          </h1>
          <p className='text-paper-600 text-center mb-6'>
            Completa las respuestas para crear tu historia.
          </p>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {selectedStory.questions &&
              Object.entries(selectedStory.questions).map(
                ([key, question], index) => (
                  <div
                    key={key}
                    className='flex flex-col space-y-2'
                  >
                    <label
                      htmlFor={key}
                      className='text-sm font-semibold text-paper-700'
                    >
                      {index + 1}. {question}
                    </label>
                    <input
                      type='text'
                      id={key}
                      name={key}
                      value={answers[key] || ''}
                      onChange={handleInputChange}
                      className='border border-paper-300 rounded px-3 py-2 focus:ring focus:ring-info-300 focus:outline-none'
                      placeholder={`Escribe ${question.toLowerCase()}`}
                      required
                    />
                  </div>
                )
              )}
          </div>

          <button
            type='submit'
            className='bg-info-500 text-white text-lg font-medium py-2 px-4 w-full rounded-lg hover:bg-info-600 transition-colors'
          >
            Enviar respuestas
          </button>
        </form>
      ) : (
        <div className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4'>
          <h2 className='text-2xl font-bold text-center text-paper-800'>
            {selectedStory.title}
          </h2>
          <p className='text-paper-700'>{filledHistory}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className='bg-info-500 text-white py-2 px-4 rounded-lg hover:bg-info-600 transition-colors w-full'
          >
            Crear otra historia
          </button>
        </div>
      )}
    </div>
  );
}

export default Story;
