import logo from "./logo.svg";
import "./App.css";
import "./styles/estilosGlobais.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasePage from "./pages/BasePage";
import FavoritePage from "./pages/FavoritePage";
import { SearchProvider } from "./components/common/context/searchContext";
import UsersPage from "./pages/UsersPage";
import RepositoriesPage from "./pages/RepositoriesPage";
import { FavoritesProvider } from "./components/common/context/favoritesContext";

function AppRoutes() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<BasePage />}>
              <Route index element={<HomePage />}></Route>
              <Route path="favoritos" element={<FavoritePage />}></Route>
              <Route path="users" element={<UsersPage />}></Route>
              <Route path="repositories" element={<RepositoriesPage />}></Route>
            </Route>
          </Routes>
        </FavoritesProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
