import 'bootstrap/dist/css/bootstrap.min.css';

import DigimonsList from './components/DigimonsList';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<DigimonsList />} />
      <Route exact path='/favorite' element={<Favorite />} />
    </Routes>
  );
}

export default App;
