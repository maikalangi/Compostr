import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/map' element={<Map />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
