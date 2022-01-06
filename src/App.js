import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Nintendo from './pages/Nintendo';
import Xbox from './pages/Xbox';
import PS from './pages/PS';
import Add from './pages/Add';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Add />} />
          <Route path='/Nintendo' element={<Nintendo />} />
          <Route path='/PS' element={<PS />} />
          <Route path='/Xbox' element={<Xbox />} />
        </Routes>


    </Router>

  );
}

export default App;
