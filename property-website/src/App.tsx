
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Filters from './components/Filters/FiltersComponent';
import Header from './components/Header/Header';
import Slider from './components/Header/Silder';
import Layout from './components/Layout/Layout';
import Team from './components/Team/Team';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/team' element={<Team />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    
  );
}

export default App;
