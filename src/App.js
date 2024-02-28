import './App.css';

//pages
import Games from './pages/Games';
import AddGame from './pages/AddGame';
import Login from './pages/Login'
import Signup from './pages/Signup'

//routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//auth context
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/games' element={user ? <Games /> : <Navigate to='/login' />} />
          <Route path='/add_game' element={<AddGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
