import React, { useContext } from "react";
import styles from "./ProfilePage.module.scss";
import { VscAccount } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import {
  SearchContext,
  useSearchContext,
} from "../../components/common/context/searchContext";
import { useFavoritesContext } from "../../components/common/context/favoritesContext";

const ProfilePage = () => {
  //const { userProfile } = useContext(SearchContext);
  const { star, addRepo } = useFavoritesContext();
  const {showMoreResults, userProfileData, userRepositories, showMoreResultsProfile} = useSearchContext();
  return (
    <div className={styles.container}>
      <div className={styles.card_user}>
        <img src={userProfileData.avatar} alt="User-Avatar" />
        <div className={styles.content}>
          <h1>{userProfileData.name}</h1>
          <h2>{userProfileData.subName}</h2>
          <div className={styles.bar_colored}></div>


          <div className={styles.followers}>
            <FaUsers size={20} />
            <h3>
              Seguindo: {userProfileData.following}
            </h3>
            <h3>
              Seguidores: {userProfileData.followers}
            </h3>
          </div>
          <h4>
            <AiOutlineHome size={20} />
            <p>{userProfileData.location}</p>
          </h4>
        </div>
      </div>

      <div className={styles.cards}>
        {userRepositories.map((item) => {
          return (
            <div className={styles.card_repository}>
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <img
                src={star[item.name] ? "/star-colored.png" : "/star.png"}
                alt="Star-Image"
                onClick={() => addRepo(item.name, item.id)}
              />
            </div>
          );
        })}
      <button onClick={showMoreResultsProfile}>Buscar Mais</button>
      </div>
    </div>
  );
};

export default ProfilePage;
