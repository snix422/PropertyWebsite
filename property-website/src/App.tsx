
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Filters from './components/Filters/FiltersComponent';
import Header from './components/Header/Header';
import Slider from './components/Header/Silder';
import Layout from './components/Layout/Layout';
import Team from './components/Team/Team';
import SearchComponent from './components/SearchComponent/SearchComponent';
import OfferPage from './components/OfferPage/OfferPage';
import Contact from './components/Contact/Contact';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/search' element={<SearchComponent/>}></Route>
        <Route path='/offerpage/:id' element={<OfferPage/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    
  );
}

export default App;
