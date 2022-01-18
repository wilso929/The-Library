import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Nintendo from './pages/Nintendo';
import Xbox from './pages/Xbox';
import PS from './pages/PS';
import Add from './pages/Add';
import Home from './pages/Home';
import Switch from './pages/Consoles/Switch';
import Wiiu from './pages/Consoles/Wiiu';
import Wii from './pages/Consoles/Wii';
import Gamecube from './pages/Consoles/Gamecube';
import N64 from './pages/Consoles/N64';
import Snes from './pages/Consoles/Snes';
import Nes from './pages/Consoles/Nes';
import Ds from './pages/Consoles/Ds';
import Gameboy from './pages/Consoles/Gameboy';
import GamePro from './pages/GamePro';

import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Nintendo' element={<Nintendo />} />
          <Route path='/PS' element={<PS />} />
          <Route path='/Xbox' element={<Xbox />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/Switch' element={<Switch />} />
          <Route path='/Wiiu' element={<Wiiu />} />
          <Route path='/Wii' element={<Wii />} />
          <Route path='/Gamecube' element={<Gamecube />} />
          <Route path='/N64' element={<N64 />} />
          <Route path='/Snes' element={<Snes />} />
          <Route path='/Nes' element={<Nes />} />
          <Route path='/Ds' element={<Ds />} />
          <Route path='/Gameboy' element={<Gameboy />} />
          <Route path='/GameCard/:id' element={<GamePro />} />

        </Routes>


    </Router>

  );
}

export default App;
