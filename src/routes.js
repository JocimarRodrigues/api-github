import "styles/globalStyles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./components/common/context/favoritesContext";
import { SearchProvider } from "./components/common/context/searchContext";
import HomePage from "./pages/HomePage";
import BasePage from "./pages/BasePage";
import FavoritePage from "./pages/FavoritePage";
import UsersPage from "./pages/UsersPage";
import RepositoriesPage from "./pages/RepositoriesPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

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
              <Route path="userProfile" element={<ProfilePage />}></Route>
              <Route path="repositories" element={<RepositoriesPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </FavoritesProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
