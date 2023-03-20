import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DigimonContext = createContext();

const Provider = ({ children }) => {
  const [digimons, setDigimons] = useState([]);
  // Favorite.
  const [favoriteDigimons, setFavoriteDigimons] = useState([]);

  const fetchDigimons = async () => {
    const response = await axios.get(
      'https://digimon-api.vercel.app/api/digimon'
    );

    setDigimons(response.data);
  };

  // Favorite
  const fetchFavoriteDigimons = async () => {
    const response = await axios.get('http://localhost:8080/digimons');

    setFavoriteDigimons(response.data);
  };

  useEffect(() => {
    fetchDigimons();
    fetchFavoriteDigimons();
  }, []);

  const deleteDigimon = async (digimon) => {
    try {
      const { id } = digimon;
      const newDigimons = await axios.delete(
        `http://localhost:8080/digimon/${id}`
      );
      console.log(newDigimons.data);
      setFavoriteDigimons(newDigimons.data);
    } catch (error) {}
  };

  return (
    <DigimonContext.Provider
      value={{ digimons, favoriteDigimons, deleteDigimon }}
    >
      {children}
    </DigimonContext.Provider>
  );
};

export { Provider };
export default DigimonContext;
