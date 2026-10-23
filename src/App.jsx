import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';

function App() {
  return (
    <BrowserRouter>
    <main style={{ margineight: '80vh', padding: '20px' }}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;