import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritos";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [ star, setStar ] = useState({});
  console.log(star)

  const addRepo = (name, description) => {
    const newRepo = {
      name: name,
      description: description,
    };

    addFavorite(newRepo)
  };

  const addFavorite  = (newFavorite) => {
    setStar({...star, [newFavorite.name]: !star[newFavorite.name]})

    const favoriteExists = favorites.find((favorite) => favorite.name === newFavorite.name);

    if (favoriteExists) {
        setFavorites(
            favorites.filter((favorite) => favorite.name !== favoriteExists.name)
        )
    } else {
        setFavorites([...favorites, newFavorite])
        setStar({...star, [newFavorite.name]: true})
    }
  }

  return {
    favorites,
    star,
    addRepo
  }
};
