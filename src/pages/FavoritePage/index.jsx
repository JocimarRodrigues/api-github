import React from "react";
import { useFavoritesContext } from "../../components/common/context/favoritesContext";
import styles from "./FavoritesPage.module.scss";

const FavoritePage = () => {
  const { favorites, star, addRepo } = useFavoritesContext();
  console.log(star)

  return (
    <div className={styles.container}>
      {favorites.length > 0 ? (
        favorites.map((item) => {
          return (
            <div id={item.name} key={item.name} className={styles.repositories}>
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <img
                src={star[item.nameRepo] ? "/star.png" : "/star-colored.png"}
                alt="Star-Image"
                onClick={() => addRepo(item.name, item.description)}
              />
            </div>
          );
        })
      ) : (
        <div className={styles.notFound}><h1>Desculpe, parece que você ainda não adicionou nenhum item aos seus favoritos.</h1></div>
      )}
    </div>
  );
};

export default FavoritePage;
