import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import './App.css';
import MainpageMap from './pages/MainpageMap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/map' element={<Map />}/>
          <Route path='/main' element={<MainpageMap />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
