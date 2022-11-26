import './App.css';
import DataSurats from './context/DataSurats';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <DataSurats>
          <Home />
        </DataSurats>
    </div>
  );
}

export default App;
