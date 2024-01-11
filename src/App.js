import './App.css';

//pages
import Games from './pages/Games';
import AddGame from './pages/AddGame';

//routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* anything outside routes would be displayed on every page */}
        {/* create navbar here! */}
        <Routes>
          <Route path='/games' element={<Games />} />
          <Route path='/add_game' element={<AddGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
