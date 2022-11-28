import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataSurats from './context/DataSurats';
import Home from './pages/Home/Home';
import Surat from './pages/Surat/Surat';
import Terjemah from './pages/Terjemah/Terjemah';

function App() {
  return (
    <div className="App">
        <DataSurats>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Surat />} />
            <Route path='/terjemah' element={<Terjemah />} />
          </Routes>
        </DataSurats>
    </div>
  );
}

export default App;
