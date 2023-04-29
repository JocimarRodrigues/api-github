import React from "react";
import styles from "./RepositoriesPage.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import { useSearchContext } from "../../components/common/context/searchContext";
import { useFavoritesContext } from "../../components/common/context/favoritesContext";

const RepositoriesPage = () => {
  const { repositories, showMoreResults } = useSearchContext();

  const {addRepo, star} = useFavoritesContext();



  return (
    <div className={styles.container}>
      {repositories.map((repository) => {

       
        return (
          <div
            className={styles.repositories}
            key={repository.id}
            id={repository.id}
          >
            <h1>{repository.nameRepo}</h1>
            <h2>{repository.description}</h2>
            <div className={styles.favorites}>
              <AiOutlineStar size={25} />
              <p>{repository.stars}</p>
            </div>

            <img 
            src={star[repository.nameRepo] ? "/star-colored.png": "/star.png"} 
            alt="Star-Image"
            onClick={() => addRepo(repository.nameRepo, repository.description)} />
          </div>
        );
      })}
      <button onClick={showMoreResults}>Mostrar mais</button>
    </div>
  );
};

export default RepositoriesPage;
