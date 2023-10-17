import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Nav from './components/Nav';
import ListShoes from './components/ListShoes';
import CreateShoe from './components/CreateShoe';
import ListHats from './components/ListHats';
import CreateHat from './components/CreateHat';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='list-shoes' element={<ListShoes />} />
          <Route path='create-shoe' element={<CreateShoe />} />
          <Route path='list-hats' element={<ListHats />} />
          <Route path='create-hat' element={<CreateHat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
