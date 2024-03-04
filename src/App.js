import './App.css';

//pages
import Games from './pages/Games';
import AddGame from './pages/AddGame';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Comics from './pages/Comics'

//routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//auth context
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';

function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
          <Route path='/games' element={user ? <Games /> : <Navigate to='/login' />} />
          <Route path='/comics' element={user ? <Comics /> : <Navigate to='/login' /> } />
          {/* <Route path='/add_game' element={user ? <AddGame /> : <Navigate to='/login' />} /> */}
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/signup' element={user ? <Home /> : <Signup />} />
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
