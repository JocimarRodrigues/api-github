import React from "react";
import logo from "./github (3).png";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo Github" />
      <div className={styles.buttons}>
        <button>Usuario</button>
        <button>Repositorio</button>
      </div>
    </div>
  );
};

export default HomePage;
