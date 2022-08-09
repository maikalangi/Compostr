import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}>
          </Route>
          <Route path="/contribute" exact element={<Calculator/>}>
          </Route>
        </Routes>
      </Router>
=======
      <header className="App-header">
      </header>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
