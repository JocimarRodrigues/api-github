import styles from "./ProfilePage.module.scss";
import { FaUsers } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useSearchContext } from "components/common/context/searchContext";
import { useFavoritesContext } from "components/common/context/favoritesContext";

const ProfilePage = () => {
  const { star, addRepo } = useFavoritesContext();
  const { userProfileData, userRepositories, showMoreResultsProfile } =
    useSearchContext();
  return (
    <div className={styles.container}>
      <div className={styles.card_user}>
        <div className={styles.content}>
          <img src={userProfileData.avatar} alt="User-Avatar" />
          <h1>{userProfileData.name}</h1>
          <h2>{userProfileData.subName}</h2>
          <div className={styles.bar_colored}></div>

          <div className={styles.followers}>
            <FaUsers size={20} />
            <h3>Seguindo: {userProfileData.following}</h3>
            <h3>Seguidores: {userProfileData.followers}</h3>
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
                alt="Star"
                onClick={() => addRepo(item.name, item.description)}
              />
            </div>
          );
        })}
        {userRepositories.length > 0 && (
          <button onClick={showMoreResultsProfile}>Buscar Mais</button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
