import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Map from './pages/Map';
import './App.css';
import MainpageMap from './pages/MainpageMap';
import Calculator from './components/Calculator';
import Login from './pages/Login';
import BottomNav from './components/BottomNav';
import Signup from './pages/Signup';

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/signup" exact element={<Signup/>}/>
          <Route path="/contribute" exact element={<Calculator/>}/>
          <Route path='/map' element={<Map />}/>
           {user && <Route path='/main' exact element={<MainpageMap />}/>}
           <Route path="/main" exact element={<Navigate replace to="/"/>}/>
        </Routes>
      <BottomNav/>
      </BrowserRouter>
    </div>
  );
}

export default App;