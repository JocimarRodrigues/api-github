import React from "react";
import styles from "./UsersPage.module.scss";
import { useSearchContext } from "../../components/common/context/searchContext";

const UsersPage = () => {
  const { users, showMoreResults } = useSearchContext();

  return (
    <div className={styles.container}>
      {users.map((user) => {
        return (
          <div className={styles.users} key={user.id} id={user.id}>
            <img src={user.avatar} alt="Avatar do Usuário" />
            <h1>{user.userName}</h1>
          </div>
        );
      })}
      <button onClick={showMoreResults}>Mostrar Mais</button>
    </div>
  );
};

export default UsersPage;
