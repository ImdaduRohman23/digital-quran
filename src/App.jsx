import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataSearch from './context/DataSearch';
import DataSurats from './context/DataSurats';
import Home from './pages/Home/Home';
import Surat from './pages/Surat/Surat';

function App() {
  return (
    <div className="App">
        <DataSurats>
        <DataSearch>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Surat />} />
          </Routes>
        </DataSearch>
        </DataSurats>
    </div>
  );
}

export default App;
