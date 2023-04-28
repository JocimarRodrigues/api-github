import React from "react";
import logo from "./gitHubLogo.png";
import styles from "./HomePage.module.scss";
import Form from '../../components/Form';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo Github" />
      <Form />
      <div className={styles.buttons}>
        <button>Usuario</button>
        <button>Repositorio</button>
      </div>
    </div>
  );
};

export default HomePage;
