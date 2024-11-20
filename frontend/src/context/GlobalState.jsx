import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import stories from '../stories.json';

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleRandomStory = () => {
    const randomIndex = Math.floor(Math.random() * stories.length);
    const randomStory = stories[randomIndex];
    navigate(`/story/${randomStory.id}`);
  };

  return (
    <Context.Provider value={{ handleRandomStory, stories }}>
      {children}
    </Context.Provider>
  );
};
