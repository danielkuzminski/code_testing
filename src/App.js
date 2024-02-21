import './App.css';

//pages
import Games from './pages/Games';
import AddGame from './pages/AddGame';
import Login from './pages/Login'
import Signup from './pages/Signup'

//routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* anything outside routes would be displayed on every page */}
        {/* create navbar here! */}
        <Navbar />
        <Routes>
          <Route path='/games' element={<Games />} />
          <Route path='/add_game' element={<AddGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
