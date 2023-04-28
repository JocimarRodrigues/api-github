import logo from './logo.svg';
import './App.css';
import './styles/estilosGlobais.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasePage from './pages/BasePage';
import FavoritePage from './pages/FavoritePage';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<HomePage />}></Route>
          <Route path='favoritos' element={<FavoritePage />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
