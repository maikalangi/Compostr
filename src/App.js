import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Login from './pages/Login';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}>
          </Route>
          <Route path="/contribute" exact element={<Calculator/>}>
          </Route>
        </Routes>
      </Router>
      <BottomNav/>
    </div>
  );
}

export default App;