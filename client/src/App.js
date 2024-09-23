import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Grades from './pages/Grades';
import Classes from './pages/Classes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/grades' element={<Grades />} />
          <Route path='/grades/class' element={<Classes />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
