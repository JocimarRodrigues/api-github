import React from "react";
import styles from "./UsersPage.module.scss";
import { useSearchContext } from "../../components/common/context/searchContext";

const UsersPage = () => {
  const { users } = useSearchContext();

  return (
    <div className={styles.container}>
      {users.map((user) => {
        return (
          <div className={styles.users} key={user.id} id={user.id}>
            <img src={user.avatar} alt="User-Avatar" />
            <h1>{user.userName}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default UsersPage;
